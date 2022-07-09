import '../cardsBusHab/CardsBusHab.css';
import React from "react";
import { Link } from 'react-router-dom';

function CardsBusHab() {
    return (

       <section className="cards-bh">

        <div className="card-bh">
            <div className="card-img"></div>
            <div className="cont-bh">
            <h2>Habitacion matrimonial</h2>
                <div className="linea"></div>
                <h3>$ 150.000</h3>
                <p>Capacidad: 2</p>
                <p>La habitaciones estandar doble matrimonial del hotel son luminosas y ambiente contemporanea</p>
                <Link to="/reservaRealizada" className=''>
                <div className="btn-re"><button className="btn-reservar">Reservar</button></div>

                </Link>
            </div>
        </div>
        
       </section> 
    );
}


export default CardsBusHab;