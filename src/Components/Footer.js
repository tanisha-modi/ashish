import React from 'react'
import "./Footer.css"
import mailIcon from "../images/mail-icon.png"
import wIcon from "../images/whatsapp.png"

function Footer() {
  return (
    <div className='Footer-container'>
      <div id="contact" className='contact-us'>Contact Us</div>
      <div className='footer-links'>
        <div className='mail'>
          <a href="#" className='footer-link'><img src={mailIcon} alt="" /></a>
          <a href="#" className='footer-link'>malviya.ashish0929@gmail.com</a>
        </div>
        <div className='mail'>
          <a href="#" className='footer-link'><img src={wIcon} alt="" /></a>
          <a href="#" className='footer-link'>8989898989</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
