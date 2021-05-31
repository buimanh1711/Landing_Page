import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { WOW } from 'wowjs'
import { Link, useLocation } from 'react-router-dom'

import './static/styles/common.css'
import './static/styles/global.scss'
import './static/styles/main_layout.scss'
import './static/styles/about.scss'
import './static/styles/home.scss'

import './static/styles/responsive.scss'

import MainLayout from './layouts/main'
import Home from './pages/home'
import About from './pages/about'

function App() {
  const location = useLocation()
  const asPath = location.pathname || '/'

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    scrollTop()
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

  useEffect(() => {
    scrollTop()
  }, [asPath])

  return (
    <div className='my-app'>
      <Switch>
        <Route path='/about'>
          <MainLayout>
            <About />
          </MainLayout>
        </Route>
        <Route path='/'>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </div>
  )
}

export default App
