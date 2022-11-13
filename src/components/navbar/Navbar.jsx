
import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../pictures/logo.jpeg'

const  Navbar= () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='land_navbar'>
        <div className='land_navbar-links'>
            <div className='land_navbar-links_logo'>
                <img src={logo} alt= "logo"/>
            </div>

        <div className="land_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#company">Company</a></p>
          <p><a href="#services">Services</a></p>
        </div>
        </div>
        <div className="land_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="white" size={70} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="land_navbar-menu_container scale-up-center">
          <div className="land_navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#company">Company</a></p>
          <p><a href="#services">Services</a></p>
          </div>
        </div>
        )}
      </div>
    </div>

  )
}

export default Navbar;