import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Hero2 from './Hero2/Hero2'
import Myabout from './Myabout/Myabout'
const About = () => {
  return (
    <div>
    <Navbar/>
   
    <Hero2
  heading="About Me"
  text1="I'm an self-driven individual who is good at problem solving and programming, with an emphasis on writing clean and maintainable code. Experienced with"
  highlightedText="data structures / algorithms"
  highlightColor="yellow"
  text2="and designing optimal solutions, aspiring to make a career in software engineering with a focus on full stack development."
/>

    <Myabout/>
    <Footer/>
    </div>
  )
}

export default About
