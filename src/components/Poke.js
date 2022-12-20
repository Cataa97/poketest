import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Poke = ({ poke }) => {

    return (
        <>
            <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 rounded card' style={{ border: 'none' }}>
                <Link to={`/pokemon/${poke.id}`}>
                    <Card.Img style={{ width: '8rem' }} src={poke.sprites.front_default} variant='top' />
                </Link>
                <Card.Body className={`${poke.types[0].type.name} rounded text-white`}>
                    <Button variant="danger"><Link to={`/pokemon/${poke.name}`} className='link-name'>
                        <Card.Title as='div'><strong>#{poke.id} {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</strong></Card.Title>
                    </Link></Button>

                </Card.Body>
            </Card>
        </>
    )
}

export default Poke;