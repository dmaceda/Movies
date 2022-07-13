import React from 'react'
import './Footer.css'
import LOGO from '../../icons/clapperboard.png'
const Footer = () => {
  return (
    <footer>
      <img className='logo' src={LOGO} alt='logo' width='100px'/>
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='/favs'>Favorites</a></li>
      </ul>
  
      <div className="footer__copyright">
        <small>&copy; Diego Maceda. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer