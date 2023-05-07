import React from 'react'
import "./Hero.css"
import Intro from "../../Asserts/hero.jpg"
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="mask">

                <img className='intro-img' src={Intro} alt="hero" />
            </div>
            <div className='content'>
                <h1> Hi, I'm Dhasneem </h1>
                <h2 style={{marginBottom: "8%", color:"white", fontSize: "2rem"}}> Full Stack Developer</h2>
                <div>
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>


                </div>
            </div>


        </div>
    )
}

export default Hero
