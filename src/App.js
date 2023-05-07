import React from 'react'
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App

