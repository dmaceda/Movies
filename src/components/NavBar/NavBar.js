import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../icons/clapperboard.png'
import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <NavLink className='home' exact to="/" >
            <div className='logo-pelis'>
                <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            <h4>Movies</h4>
            </div>
            </NavLink>
            <nav>
                <ul className="list">
                    
                        <NavLink className='home' exact to="/" >Home</NavLink>
                        <NavLink className='fav' to="/favs" >Favoritas</NavLink>
                    
                </ul>
            </nav>
        </header>
    )
}