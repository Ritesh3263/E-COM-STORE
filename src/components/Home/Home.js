import React from 'react'
import HeroSection from './HeroSection'
import Services from './ServicesSection'
import Trusted from './Trusted'
import Contact from '../Contact/Contact'
import FeatureProduct from '../FeaturedProduct/FeaturedProduct'

const Home = () => {
  return (
    <>
      {/* <h1>HOME</h1> */}
      <HeroSection/>
      <FeatureProduct/>
      <Services/>
      <Trusted />
      <Contact/>
    </>
  )
}

export default Home
