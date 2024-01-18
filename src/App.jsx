import React from 'react'
import './App.css'

// components
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Schedule from './components/Schedule'
function App() {


  return (
    <>
    <div style={{ backgroundColor: '#E9FEF8' }}>
      <Navbar />  
      <HeroSection />
      <Services />
      <Schedule />
    </div>
    </>
  )
}

export default App
