import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import FormBusHab from '../components/cardsBusHab/CardsBusHab';
  // nav bar
import { Link } from 'react-router-dom';

import '../components/assets/css/inicio.css'

function Inicio() {
    return (
        <div>
            <Header />
            <FormBusHab />
            <FormBusHab />
            <FormBusHab />
           
            <Footer/>
        </div>
    )
}

export default Inicio;