import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="social-icons">
                    <a href="https://github.com/sanchezle" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" style={{color: 'darkgrey'}}></i>
                    </a>

                    <a href="https://wa.me/+34664050394" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp" style={{color: 'darkgrey'}}></i>
                    </a>
            </div>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Demo</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
   
                </div>
            </div>
        </div>
    )
}

export default Footer
