import BarraHeader from '../components/barraheader/barrraHeader';
import Footer from '../components/footer/footer';
import ReservaR from '../components/cardReserva/cardReserva';
  // nav bar
import { Link } from 'react-router-dom';

import '../components/assets/css/inicio.css'

function Inicio() {
    return (
        <div>
            <BarraHeader />
            <ReservaR />
           
            <Footer/>
        </div>
    )
}

export default Inicio;