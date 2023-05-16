import React from 'react'
import AboutFitness from '../components/fitnessComponents/AboutFitness'
import Carousel from '../components/fitnessComponents/Carousel'
import HomeFitness from '../components/fitnessComponents/HomeFitness'

import Recommendations from '../components/fitnessComponents/Recommendations'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function fitness() {
  return (
    <div>
    <Navbar/>
    <HomeFitness/>
    <AboutFitness/> 
    <Carousel/>
    <Recommendations/>
    <Footer/>
    </div>
    
  )
}

export default fitness