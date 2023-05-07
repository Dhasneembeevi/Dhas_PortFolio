import React from 'react'
import {FiMail} from "react-icons/fi"
import Navbar from './Navbar/Navbar'
import Hero2 from './Hero2/Hero2'
import Footer from './Footer/Footer'
import  Form  from './Form/Form'
const Contact = () => {
  return (
    <div>
    <Navbar/>
   
   <Hero2
   heading="Get In Touch"
  text1="Submit the form below or send me an email on "
  highlightedText="📧 dhasmohamed1020@gmail.com"
  highlightColor="yellow"
  text2="."
/>

   <Form/>
      <Footer/>
    <FiMail className='mail' size={30}/>
    </div>
  )
}

export default Contact
