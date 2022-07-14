import React from 'react'
import './Footer.css'
import LOGO from '../../icons/clapperboard.png'
const Footer = () => {
  return (
    <footer>
      <img className='logo' src={LOGO} alt='logo' width='100px'/>
     
  
      <div className="footer__copyright">
        <small>&copy; Diego Maceda. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer