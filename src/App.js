import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { WOW } from 'wowjs'

import './static/styles/common.css'
import './static/styles/global.scss'
import './static/styles/main_layout.scss'
import './static/styles/home.scss'

import './static/styles/responsive.scss'

import MainLayout from './layouts/main'
import Home from './pages/home'

function App() {
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
  }, [])

  return (
    <div className='my-app'>
      <button id='scroll-top' onClick={scrollTop}><i className="fas fa-arrow-up"></i></button>
      <Switch>
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
