import React from "react";
import "./style.css"

export default function Footer() {
    return (
        <footer>
                <div className="socialMedias">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-google"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-youtube"></a>
                    <a href="#" className="fa fa-instagram"></a>
                </div>
                <div className="copy">
                    <span>Copyright &copy; 2022 | Aelander Farias</span>
                </div>
        </footer>
    )
}