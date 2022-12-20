import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import Loader from '../Loader';


const PokemonCards = () => {
    const [pokeDetails, setPokeDetails] = useState();
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    const getPokemon = async (id) => {
        const details = await getPokeData(id);
        setPokeDetails(details.data);
        console.log(details.data)
        setLoading(false);
    }

    const getPokeData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Link to={`/pokemon/${pokeDetails.id}`}>
                                <Card.Img style={{ width: '15rem' }} src={pokeDetails.sprites.front_default} variant='top' />
                            </Link>
                            <Card.Body className={`${pokeDetails.types[0].type.name} rounded text-white`}>
                                <Link to={`/pokemon/${pokeDetails.name}`}  className='link-name'>
                                    <Card.Title as='div' >
                                        <strong >#{pokeDetails.id} {pokeDetails.name.charAt(0).toUpperCase() + pokeDetails.name.slice(1)}</strong>
                                    </Card.Title>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        {pokeDetails.types.map(t => (
                                            <Col key={t.type.name}>
                                                <div className={`${t.type.name} rounded px-10 py-1`} style={{ color: 'red' }}>
                                                    {t.type.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card.Img style={{ width: '15rem' }} src={pokeDetails.sprites.front_default} />
                                            <Card.Text>Normal </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Img style={{ width: '15rem' }} src={pokeDetails.sprites.front_shiny} />
                                            <Card.Text>Shiny</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <h2>Abilities</h2>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        {pokeDetails.abilities.map(a => (
                                            <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <div className={`rounded px-4 py-1 abilities`}>
                                                    {a.ability.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default PokemonCards;