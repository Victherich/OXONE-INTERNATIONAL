import React from 'react'
import Hero from './Hero'
import SolutionsSection from './SolutionsSection'
import Features from './Features'
import ServicesCTA from './ServicesCTA'
import BriefAbout from './AboutBrief'
import PartnershipsAndAlliances from './PartnershipsAndAlliances'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <SolutionsSection/>
       <BriefAbout/>
      <Features/>
   
      <ServicesCTA/>
      
    </div>
  )
}

export default LandingPage
