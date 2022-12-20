import React from 'react'
import NavBar from '../components/layout/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../components/pages/Home';
import PokemonCards from '../components/pages/PokemonCards';



const Rutas = () => {
    return (
        <BrowserRouter>
            <NavBar />
            {/* Contenido Central y Rutas */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:id" element={<PokemonCards />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Rutas;