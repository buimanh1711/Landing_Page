import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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

  return (
    <div className='my-app'>
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
