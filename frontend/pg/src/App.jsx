import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import SecurityStandard from './pages/safty/Securitystandard'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import RoomPlans from './pages/Roomplan/Roomplan'
import ComfortAndAmenities from './pages/LandingPage/facilate/ComfortAndAmenities'
import ContactUs from './pages/contact/ContactUs'

function App() {


  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/safety' element={<SecurityStandard />} />
        <Route path='/room' element={<RoomPlans />} />
        <Route path='/facilities' element={<ComfortAndAmenities />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
