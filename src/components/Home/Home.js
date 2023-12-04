import React from 'react'
import HeroSection from './HeroSection'
import Services from './ServicesSection'
import Trusted from './Trusted'
import Contact from '../Contact/Contact'
import FeatureProduct from '../FeaturedProduct/FeaturedProduct'
import CarouselSection from './CarouselSection'
import "./Home.scss"

const Home = () => {
  return (
    <div >
      {/* <h1>HOME</h1> */}
      <CarouselSection/>
      <HeroSection/>
      {/* <FeatureProduct/> */}
      <Services/>
      <Trusted />
      <Contact/>
    </div>
  )
}

export default Home
