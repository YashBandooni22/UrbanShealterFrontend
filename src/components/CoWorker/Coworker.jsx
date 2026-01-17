import React from 'react'
import PartnerHero from './PartnerHero '
import PartnerStepsSection from './PartnerStepsSection'
import PartnerFAQSection from './PartnerFAQSection'

const Coworker = () => {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
    <PartnerHero/>
    <PartnerStepsSection />
    <PartnerFAQSection/>
    </div>
  )
}

export default Coworker