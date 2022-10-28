import React from "react";
import { Link } from "react-router-dom";

export default function Contato() {
    return (
        <div>
            <div className="containerBarra">
                <h2>
                    Entre em contato conosco
                </h2>
            </div>
            <div className="container">
                <div className="form">
                    <label for="formControlInput" className="form-label">Seu Nome </label>
                    <input className="form-control" type="text" placeholder="Nome Completo" />
                    <br />
                    <label for="FormControlInput" className="form-label">Seu E-mail</label>
                    <input type="email" className="form-control" placeholder="nome@exemplo.com" />
                    <br />
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Deixe sua mensagem</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Link className="btn btn-primary" to="/">Enviar</Link>

                </div>
                <hr />
            </div>
        </div>
    )
}