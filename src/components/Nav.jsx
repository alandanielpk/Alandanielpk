import {useState} from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (

    <header className='navbar'>
        <div className="nav_logo">
            <Link to="/soy"><img className='imgen' src='./Alan.jpg'/></Link>
        </div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <div className='links'>
            <Link to="/">Home</Link>
            <Link to="https://alanredes.carrd.co/" target='_blank' >Networks</Link>
            <Link to="https://drive.google.com/file/d/15n3w70jqjvZoFP2ZL5xcNTKR0MArqsAL/view?usp=sharing" target='_blank'>Cv</Link>
            <Link to="/comentar">comments</Link>
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