import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import Work from "./Work/Work"
import Myabout from './Myabout/Myabout'
import Form from './Form/Form'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Myabout/>
      <Work/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
