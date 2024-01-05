import React from 'react'
import Keyboard from './components/Jumbled'
import Matchboard from './components/Matched'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

const page = () => {
  return (
    <>
    <Navbar />
    {/* <Matchboard/>
    <Keyboard/> */ }
    <Homepage/>
    </>
  )
}

export default page