import '../footer/footer.css';
import React from "react";

function Footer() {
    return (
        <footer>

            <div className="barra-footer">
                <h4>8.9</h4>
                <p>Muy bueno...550 reseñas</p>
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <p>Carrera 4 No. 16-03, Bogotá 111711</p>

            </div>
            <div className="barra-dark">
                <p>© 2022 KRO Hotels Hotelia M1 Ltd Todos los derechos reservados. | Política de Privacidad | Términos y
                    condiciones | Declaración de acceso |</p>
            </div>


        </footer >



    );
}


export default Footer;