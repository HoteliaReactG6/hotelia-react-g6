import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import './header.css';

function Header() {
    return (
        // caracteristicas del componente
        <header>
            <div className='menu'>

            <Link to="/" className='logo-principal'>
            <img src={logo} alt="logo" />
            </Link>

            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Home</p>
            </Link>
            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Home</p>
            </Link>
            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Home</p>
            </Link>
            <Link to="#" className='contenedor-g'>
              <div className='logo-nuestro-h'><i className="fa-solid fa-hotel fa-1x"></i></div>
              <p>Home</p>
            </Link>

            <i class="fa-regular fa-user"></i>
            </div>
        </header>
    );
}
export default Header;