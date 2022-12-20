import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Poke from './Poke';
import Loader from './Loader';

function PokeList() {

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokeList = async () => {
        let pokemonArray = [];
        for (let i = 1; i <= 151; i++) {
            pokemonArray.push(await getPokeData(i));
        }
        console.log(pokemonArray);
        setPoke(pokemonArray);
        setLoading(false);
    }

    const getPokeData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokeList();
    }, [])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row>
                    {poke.map(p => (
                        <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Poke poke={p.data} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
}

export default PokeList;