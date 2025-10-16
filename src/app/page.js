import About from '@/components/Home/About'
import AboutMe from '@/components/Home/AboutMe'
import HeroSection from '@/components/Home/heroSection'
import React from 'react'

function page() {
  return (
    <>
    {/* <h1></h1> */}
      <HeroSection/>
      <AboutMe/>
      <About/>
    </>
  )
}

export default page