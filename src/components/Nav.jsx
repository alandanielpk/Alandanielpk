import {useState} from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (

    <header className='navbar'>
        <div className="nav_logo">
            <Link to="/soy" className='sign'><img className='imgen' src='./Alan.jpg'/></Link>
            <div className='textologo'>!Soy¡</div>
        </div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <div className='links'>
            <Link to="/"><i className='bx bx-home'></i>Home</Link>
            <Link to="https://alanredes.carrd.co/" target='_blank' ><i className='bx bx-globe'></i></Link>
            <a href="src/assets/pdf/HV-HOJADEVIDAALANLONDOÑO.pdf" target='_blank'><i className='bx bx-news'></i>Cv</a>
            <Link to="/comentar"><i className='bx bx-message-rounded-error'></i>Comments</Link>
            <Link className='Desarr' to="/desarrollador"><i className='bx bx-code-alt'></i>Desarrollador</Link>
            <Link className='Multim' to="/multimedia"><i className='bx bxs-pyramid'></i>Multimedia</Link>

            </div>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
  )


}

export default Nav