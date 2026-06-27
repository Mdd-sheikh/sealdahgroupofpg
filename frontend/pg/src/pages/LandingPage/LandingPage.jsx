import React from 'react'
import HeroSection from '../herosection/HeroSection'
import MissionSection from '../missionsection/MissionSection'
import ComfortsSection from '../FacillitiesSection/FacilitiesSection'
import LocationSection from '../locationsection/Locationsection'
import PromiseSection from '../Promisesection/PromiseSection'

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
        <MissionSection/>
     </div>
     
     <div className="location">
        <LocationSection/>
     </div>
    </div>
  )
}

export default LandingPage
