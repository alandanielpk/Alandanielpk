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
            <Link to="/"><i className='bx bx-home'>Home</i></Link>
            <Link to="https://alanredes.carrd.co/" target='_blank' ><i className='bx bx-globe'>Networks</i></Link>
            <Link to="https://drive.google.com/file/d/15n3w70jqjvZoFP2ZL5xcNTKR0MArqsAL/view?usp=sharing" target='_blank'><i className='bx bx-news'>Cv</i></Link>
            <Link to="/comentar"><i className='bx bx-message-rounded-error'>Comments</i></Link>
            <Link className='Desarr' to="/desarrollador"><i className='bx bx-code-alt'>Desarrollador</i></Link>
            <Link className='Multim' to="/multimedia"><i className='bx bxs-pyramid'>Multimedia</i></Link>

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