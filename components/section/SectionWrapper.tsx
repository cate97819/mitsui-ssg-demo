'use client'
import ReactLenis from 'lenis/react'
import React from 'react'
import MainVisual from './MainVisual'
import Feature from './Feature'
import Exhibitors from './Exhibitors'
import Products from './Products'
import News from './News'
import Outline from './Outline'
import { siteConfig } from '@/props/siteConfig'

const SectionWrapper = () => {

  const easeOutQuart = (x: number) => {
    return 1 - Math.pow(1 - x, 4);
  };

  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      easing: easeOutQuart,
    }}>
      <div style={{marginTop: siteConfig.headerHeight + "px"}}>
        <MainVisual/>
        <Feature/>
        <Exhibitors/>
        <Products/>
        <News/>
        <Outline/>
      </div>
    </ReactLenis>
  )
}

export default SectionWrapper