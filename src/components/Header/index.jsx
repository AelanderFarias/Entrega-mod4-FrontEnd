import React from "react";
import Logo from "../../assets/img/logo.png";
import ImgDestino from "../../assets/img/icone-destino.png";
import ImgPromo from "../../assets/img/icone-promocoes.png";
import ImgContato from "../../assets/img/icone-contato.png";
import "./style.css"


export default function Header() {
    return (
            <header id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html">
                                <img src={Logo} className="img-fluid" alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link" href="destino.html">
                                        <img src={ImgDestino} alt="Destino" className="iconeNavBar" />
                                        Destino
                                    </a>
                                    <a className="nav-link" href="promocoes.html">
                                        <img src={ImgPromo} alt="promocoes" className="iconeNavBar" />
                                        Promoções
                                    </a>
                                    <a className="nav-link " href="contato.html">
                                        <img src={ImgContato} alt="Contato" className="iconeNavBar" />
                                        Contato
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
    )
}