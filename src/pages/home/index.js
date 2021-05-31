import HomeAbout from "./About"
import HomeBanner1 from "./Banner1"
import Partials from "./Partials"
import Reviews from "./Reviewer"
import { WOW } from 'wowjs'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const bannerWow = new WOW({
      boxClass: 'banner-1',
      offset: 0,
      mobile: false,
      live: true
    })

    bannerWow.init()

    const aboutWow = new WOW({
      boxClass: 'about',
      offset: 150,
      mobile: false,
      live: true
    })

    aboutWow.init()

    const partialsWow = new WOW({
      boxClass: 'partial',
      offset: 300,
      mobile: false,
      live: true
    })

    partialsWow.init()

    const reviewsWow = new WOW({
      boxClass: 'reviews',
      offset: 350,
      mobile: false,
      live: true
    })

    reviewsWow.init()
  }, [])
  return (
    <div id='home'>
      <HomeBanner1 />
      <HomeAbout />
      <Partials />
      <Reviews />
    </div>
  )
}

export default Home