import React from 'react'
import Luis from './images/luis-sanchez.png'
import './Hero.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>

                <div className='col-2'>
                    <h2>LUIS SÁNCHEZ</h2>

                </div>
                <img src={Luis} alt='Luis Sanchez' style={{width: "600px", height: "auto"}} />
            </div>
        </div>
    )
}

export default About
