import React from 'react'
import Navbar from './Navbar/Navbar'
import Work from './Work/Work'
import Footer from './Footer/Footer'
import Hero2 from './Hero2/Hero2'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2
      heading="Some of My recent Projects"
     text1="As a full stack developer, I have worked on various projects that have challenged my skills and allowed me to grow as a developer."
     highlightedText="Each project has been a unique opportunity to explore new technologies,"
     highlightColor="yellow"
     text2="solve complex problems, and create software that makes a positive impact on the end-users. In this section of my portfolio, I will showcase some of my most notable projects, highlighting their purpose, features, and technologies used."
   />
      
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
