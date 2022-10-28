import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Destino from "../pages/Destino";
import Promocoes from "../pages/Promocoes";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/destino" element={<Destino />} />
                    <Route path="/promocoes" element={<Promocoes />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}