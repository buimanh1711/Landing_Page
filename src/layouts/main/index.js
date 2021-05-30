import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {
  const location = useLocation()
  const asPath = location.pathname || '/'
  const [header, setHeader] = useState(true)

  useEffect(() => {
    let currentSticky = 300
    window.addEventListener('scroll', () => {
      const sticky = window.pageYOffset;

      if (sticky > currentSticky && header) {
        setHeader(false)
      } else {
        setHeader(true)
      }
      currentSticky = sticky <= 0 ? 0 : sticky
    })
  }, [])

  const menu = [
    {
      id: 1,
      title: 'HOME',
      isActive: true,
      path: '/'
    },
    {
      id: 2,
      title: 'ABOUT US',
      isActive: false,
      path: '/about'
    }
  ]

  return (
    <div id='main-layout'>
      <div className={header ? 'header on' : 'header off'}>
        <div className='container'>
          <div className='header-container'>
            <div className='logo'>
              <div className='logo-wrapper'>
                <a href='/'>
                  <img src='/images/logo.png' alt='anh phuong' />
                </a>
              </div>
            </div>
            <div className='menu'>
              <ul>
                {
                  menu.map(item =>
                    <li className={item.path === asPath ? 'active' : 'off'} key={item.id}>
                      <Link to={item.path}>
                        {item.title}
                      </Link>
                    </li>
                  )
                }
              </ul>
              <div className='social-networks'>
                <a href='https://facebook.com/ttuwii'>
                  <i style={{ color: '#58ACFA' }} className="fab fa-facebook"></i>
                </a>
                <a href='https://facebook.com/ttuwii'>
                  <i style={{ color: 'white' }} className="fab fa-twitter"></i>
                </a>
                <a href='https://facebook.com/ttuwii'>
                  <i style={{ color: '#FA5858' }} className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-layout-container'>
        {children}
      </div>
      <div className='footer'>
        <div className='container'>
          <div className='footer-container'>
            <h1>Our contact detail</h1>
            <p className='slogan'>Let us know what you think. We'd love to hear from you.</p>
            <hr />
            <div className='bot-content'>
              <div className='mobile-app'>
                <p>
                  Download here!
                </p>
                <Link to='/'>
                  <img src='/images/apple.png' alt='download for iphone' />
                </Link>
                <Link to='/'>
                  <img src='/images/CHplay.png' alt='download for iphone' />
                </Link>
              </div>
              <div className='info'>
                <p>Phone number: 0961 545 373</p>
                <p>Email address: Engmatch2021@gmail.com</p>
                <p>Mailing address: Havard Nhon, North Tu Liem, HN</p>
                <div className='social-networks'>
                  <a href='https://facebook.com/ttuwii'>
                    <i style={{ color: '#58ACFA' }} className="fab fa-facebook"></i>
                  </a>
                  <a href='https://facebook.com/ttuwii'>
                    <i style={{ color: 'white' }} className="fab fa-twitter"></i>
                  </a>
                  <a href='https://facebook.com/ttuwii'>
                    <i style={{ color: '#FA5858' }} className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout