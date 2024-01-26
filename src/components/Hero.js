import React from 'react'
import Luis from './images/luis-sanchez.png'
import './Hero.css'

const About = () => {
    return (
        <div className='hero' id='hero'>
            <div className='container'>

                <div className='col-2b'>
                    <h2>&#123;LUIS SÁNCHEZ &#125;</h2>
 
                </div>
                <img src={Luis} alt='Luis Sanchez' style={{width: "600px", height: "auto"}} />
            </div>
        </div>
    )
}

export default About
