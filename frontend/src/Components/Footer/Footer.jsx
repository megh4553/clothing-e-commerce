import React from 'react'
import './Footer.css'
import Footer_logo from '../Assets/logo_big.png'
import Insta from '../Assets/instagram_icon.png'
import pinterster_Icon from '../Assets/pintester_icon.png'
import Wp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={Footer_logo} alt="" />
        <p>Shopper</p>

      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={Insta} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterster_Icon} alt="" /> 
        </div>
        <div className="footer-icons-container">
            <img src={Wp_icon} alt="" />
        </div>
      </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright at 2024 - All right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
