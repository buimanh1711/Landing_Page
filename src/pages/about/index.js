import AboutBanner from "./banner"
import AboutValue from "./coreValue"
import AboutMission from "./mission"
import Quote from "./quote"
import AboutVision from "./vision"
import { useEffect } from 'react'
import { WOW } from 'wowjs'
const About = () => {
  useEffect(() => {

    const aboutBannerWow = new WOW({
      boxClass: 'about-banner',
      offset: 0,
      mobile: false,
      live: true
    })

    aboutBannerWow.init()

    const aboutVisionWow = new WOW({
      boxClass: 'about-vision',
      offset: 200,
      mobile: false,
      live: true
    })

    aboutVisionWow.init()

    const aboutMissionWow = new WOW({
      boxClass: 'about-mission',
      offset: 300,
      mobile: false,
      live: true
    })

    aboutMissionWow.init()

    const aboutValuenWow = new WOW({
      boxClass: 'about-core-value',
      offset: 400,
      mobile: false,
      live: true
    })

    aboutValuenWow.init()
  }, [])
  return (
    <div id='about'>
      <AboutBanner />
      <AboutVision />
      <AboutMission />
      <AboutValue />
      <Quote />
    </div>
  )
}

export default About