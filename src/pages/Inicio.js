import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Galeria from '../components/galeria/galeria';  // nav bar
import { Link } from 'react-router-dom';

import '../components/assets/css/inicio.css'

function Inicio() {
    return (
        <div>
            <Header />
            
            <section class="banner-index">
        <div class="menu-sup">
            <p>Planea tus eventos</p>
            <button><i class="fa-solid fa-user"></i>Login</button>
        </div>
        <h1>¡Bienvenido!</h1>
        <div class="iconos-index">
            <div class="iconos-index-int">
                <i class="fa-solid fa-bell-concierge fa-lg"></i>
                <p>Mejor tarifa online</p>
            </div>
            <div class="iconos-index-int">
                <i class="fa-solid fa-gift fa-lg"></i>
                <p>Kit de Bienvenida</p>
            </div>
            <div class="iconos-index-int">
                <i class="fa-solid fa-mug-hot fa-lg"></i>
                <p>Ingreso Temprano Sujeto a disponibilidad</p>
            </div>
            <div class="iconos-index-int">
                <i class="fa-solid fa-clock fa-lg"></i>
                <p>Salida Tarde</p>
            </div>
           

        </div>
        <div class="container-filtro">
          

        </div>

        <Link to="/busquedaHab" className=''>
        <button form="form" class="btn-in" id="form" name="form"><i class="fa-solid fa-bell-concierge"></i> Buscar
            habitaciones disponibles</button>            </Link>
        
    </section>
    <Galeria />

            <Footer/>
        </div>
    )
}

export default Inicio;