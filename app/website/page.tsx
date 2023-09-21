import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Section from './components/section'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default page