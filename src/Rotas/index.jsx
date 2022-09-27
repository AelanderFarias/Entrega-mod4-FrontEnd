import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}