import AboutBanner from "./banner"
import AboutValue from "./coreValue"
import AboutMission from "./mission"
import Quote from "./quote"
import AboutVision from "./vision"

const About = () => {
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