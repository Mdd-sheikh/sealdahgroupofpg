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
import SecurityStandard from './pages/safty/Securitystandard'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import RoomPlans from './pages/Roomplan/Roomplan'
import ComfortAndAmenities from './pages/LandingPage/facilate/ComfortAndAmenities'
import ContactUs from './pages/contact/ContactUs'

function App() {

  const [contactFormVisible, setContactFormVisible] = useState(false);


  return (
    <>
      {contactFormVisible ? <ContactUs /> : null}
      <Navbar setContactFormVisible={setContactFormVisible} contactFormVisible={contactFormVisible} />
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
