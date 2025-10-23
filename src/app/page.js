import About from '@/components/Home/About'
import AboutMe from '@/components/Home/AboutMe'
import Ayan from '@/components/Home/Ayan'
import Contact from '@/components/Home/Contact'
import HeroSection from '@/components/Home/heroSection'
import Payment from '@/components/Home/Payment'
import Server from '@/components/Home/Server'
import React from 'react'

function page() {
  return (
    <>
    {/* <h1></h1> */}
      <HeroSection/>
      <AboutMe/>
      <About/>
      <Server/>
      <Ayan/>
      <Contact/>
      <Payment/>
    </>
  )
}

export default page