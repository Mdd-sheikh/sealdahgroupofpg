import React from 'react'
import HeroSection from '../herosection/HeroSection'
import ComfortsSection from '../FacillitiesSection/FacilitiesSection'
import LocationSection from '../locationsection/Locationsection'
import PromiseSection from '../Promisesection/PromiseSection'
import Gallery from '../gallery/Gallery'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className="herosection">
        <HeroSection/>
      </div>
      <div className="promise">
        <PromiseSection/>
      </div>
     <div className="missionsection">
        <Gallery/>
     </div>
     
     <div className="location">
        <LocationSection/>
     </div>
    </div>
  )
}

export default LandingPage
