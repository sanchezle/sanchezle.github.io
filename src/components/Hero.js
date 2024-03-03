import React from 'react'
import Luis from './images/luis-sanchez.png'
import './Hero.css'

const About = () => {
    return (
        <div className='hero' id='hero'>
            <div className='container'>

                <div className='col-2b'>
                    <h2>LUIS SÁNCHEZ</h2>
                    <h3>About me,</h3>

                    <p>Software Developer with Harvard's CS50 foundation in computing. Proficient in JavaScript, HTML, CSS, React, MongoDB, Node.js, Express.js, Python, Flask, and C. 
                        Experienced in MERN stack applications and software projects from inception to completion. 
                        Passionate about applying skills in the tech industry.</p>
 
                </div>
                <img src={Luis} alt='Luis Sanchez' className='hero-image' />
            </div>
        </div>
    )
}

export default About
