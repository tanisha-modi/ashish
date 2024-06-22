import React from 'react'
import "./Nav.css"
import logo from "../images/logo.png"
// import { NavLink } from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from 'react-router-dom';


function Nav() {
    return (
        <BrowserRouter>
        <div id='nav' className="nav-container">
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo'></img>
            </div>
            <div className='links'>
                <NavHashLink  className="link" smooth to="#contact" >About us</NavHashLink>
                <NavHashLink  className='link' smooth to="#contact" >Product</NavHashLink>
                <NavHashLink  className='link' smooth to="#contact" >Contact us</NavHashLink>
            </div>        
        </div>
        </BrowserRouter>
    )
}

export default Nav
