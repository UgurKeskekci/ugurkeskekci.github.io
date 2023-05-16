import React from 'react'
import About from '../components/About'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function developer() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>

   </div>
  )
}

export default developer