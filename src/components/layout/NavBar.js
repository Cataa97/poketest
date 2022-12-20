import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
            <Navbar variant="dark" bg="danger" expand="lg" > 
                <Container fluid className='justify-content-center'>
                    <img src='https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png' style={{width:'50px'}}></img>
                    <Navbar.Brand href="/">PokeApp!</Navbar.Brand >
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                </Container>
            </Navbar>
    );
}


export default NavBar;