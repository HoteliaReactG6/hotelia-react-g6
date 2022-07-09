import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import '../header/header.css';
import './barraHeader.css';

function barraHeader() {
    return (
        // caracteristicas del componente
        <header>
            <div className='menu'>

            <Link to="/" className='logo-principal'>
            <img src={logo} alt="logo" />
            </Link>
            <div className="perfilxd">
            <h3 className="name-perfil">Adrian</h3>
            <div classname="foto-perfilxd"></div>
            
        </div>

            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Perfil</p>
            </Link>
            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Mis reservas</p>
            </Link>
            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Calendario</p>
            </Link>
            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Promociones</p>
            </Link>


            </div>
        </header>
    );
}
export default barraHeader;