import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../icons/clapperboard.png'
import './Nav.css';
import {AiOutlineHome, AiOutlineStar} from 'react-icons/ai';


export default function Nav() {
    return (
        <header className="nav">
            <NavLink className='home' exact to="/" >
            <div className='logo-pelis'>
                <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            <h4>Movies</h4>
            </div>
            </NavLink>
            <nav>
                <ul className="list">
                    
                        <NavLink className='home' exact to="/" ><AiOutlineHome/></NavLink>
                        <NavLink className='fav' to="/favs" ><AiOutlineStar/></NavLink>
                    
                </ul>
            </nav>
        </header>
    )
}