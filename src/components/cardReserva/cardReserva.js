import '../cardReserva/cardReserva.css';
import React from "react";
import { Link } from 'react-router-dom';

function CardsBusHab() {
    return (

        <div className="separ">
        <section className="cards-vr">
            <div className="card-vr">
                <div className="card-img-vr"></div>
                <div>
                <div className="cont-vr">
                    <h2>Habitacion matrimonial</h2>
                    <div className="linea"></div>
                    <h3>$ 150.000</h3>
                    <p>Capacidad: 2</p>
                    <p>La habitaciones estandar doble matrimonial del hotel son luminosas y ambiente contemporanea</p>
                </div>
                
            </div>
            </div>
    
        </section>
        <section className="resumen-res1">
            <div className="resumen-res">
                <div class="ti">
                    <h2>Su reservación</h2>
                </div>
                <div className="ti2">
                    <div className="ti22">
                        <p>Fecha de reserva</p>
                        <h2>21/03</h2>
                    </div>
                    <div className="ti23">
                        <p>Fecha de salida</p>
                        <h2>01/04</h2>
                    </div>
                </div>
                <div className="ti3">
                    <p><span>Cantidad de personas: </span>6</p>
                    <p><span>Tipo de habitacion: </span>Familiar</p>
    
                    <div className="ti33">
                        <p><span>Aspectos destacados de la habitación:</span></p>
    
                        <ul>
                            <li>3 habitaciones</li>
                            <li>Mini refrigerador</li>
                            <li>TV de alta definición de 50 pulgadas</li>
                            <li>Aire aconodicionado</li>
                        </ul>
                    </div>
                    <div className="btn-cancela"><button className="btn-cancelar">Cancelar reserva</button></div>
                </div>
            </div>
        </section>
    </div>
    );
}


export default CardsBusHab;