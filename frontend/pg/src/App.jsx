import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './pages/herosection/HeroSection'
import PromiseSection from './pages/Promisesection/Promisesection'
import MissionSection from './pages/missionsection/MissionSection'
import FacilitiesSection from './pages/FacillitiesSection/FacilitiesSection'
import Footer from './components/footer/Footer'
import LocationSection from './pages/locationsection/LocationSection'

function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <PromiseSection/>
      <MissionSection/>
      <FacilitiesSection/>
      <LocationSection/>
      <Footer/>
    </>
  )
}

export default App
