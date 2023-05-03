import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">Lucky</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://www.instagram.com/luck22y" target='_blank'><FiInstagram /></a>
        <a href="https://www.facebook.com/luck22y" target='_blank'><FaFacebookF /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lucky Kumar. All rights reserved (2023)</small>
      </div>
    </footer >
  )
}

export default Footer