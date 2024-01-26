import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="social-icons">
                    <a href="https://github.com/sanchezle" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" style={{color: 'darkgrey'}}></i>
                    </a>

                    <a href="https://wa.me/+34664050394" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp" style={{color: 'darkgrey'}}></i>
                    </a>
                </div>
              
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Experience</a>
                    </li>
       
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
