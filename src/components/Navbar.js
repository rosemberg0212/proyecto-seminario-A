import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/dog.png'

const Navbar = () => {
    return (
    <div className='NavBar'>
        <img src={logo} alt='logo'/>

        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/adopta'>Adopta</Link></li>
            <li><Link to='/nosotros'>Nosotros</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to='/donar'>Donar</Link></li>
        </ul>
    </div>
    )
}

export default Navbar