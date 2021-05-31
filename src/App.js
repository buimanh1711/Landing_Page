// import { useEffect, useState } from 'react'
// import { Switch, Route } from 'react-router-dom'
// import { WOW } from 'wowjs'
// import { Link, useLocation } from 'react-router-dom'

// import './static/styles/common.css'
// import './static/styles/global.scss'
// import './static/styles/main_layout.scss'
// import './static/styles/about.scss'
// import './static/styles/home.scss'

// import './static/styles/responsive.scss'

// import MainLayout from './layouts/main'
// import Home from './pages/home'
// import About from './pages/about'

// function App() {
//   const location = useLocation()
//   const asPath = location.pathname || '/'

//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     })
//   }

//   useEffect(() => {
//     scrollTop()
//   }, [asPath])

//   return (
//     <div className='my-app'>
//       <Switch>
//         <Route path='/about'>
//           <MainLayout>
//             <About />
//           </MainLayout>
//         </Route>
//         <Route path='/'>
//           <MainLayout>
//             <Home />
//           </MainLayout>
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// export default App
