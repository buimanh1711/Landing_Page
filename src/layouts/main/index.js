import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {
  const location = useLocation()
  const asPath = location.pathname || '/'
  const [header, setHeader] = useState(true)
  const [scrollBtn, setScrollBtn] = useState(false)

  useEffect(() => {
    let currentSticky = 300
    window.addEventListener('scroll', () => {
      const sticky = window.pageYOffset;
      if (sticky > 400) {
        setScrollBtn(true)
      } else {
        setScrollBtn(false)
      }
      if (sticky > currentSticky && header) {
        setHeader(false)
      } else {
        setHeader(true)
        setTimeout(() => {
          if (header && currentSticky > 300) {
            setHeader(false)
          } else {
            return
          }
        }, 7000)
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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div id='main-layout'>
      {
        scrollBtn &&
        <button style={{zIndex: 10000, transition: 'ease-in 1s'}} id='scroll-top' onClick={scrollTop}><i className="fas fa-arrow-up"></i></button>
      }
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
                <a href='https://www.facebook.com/engmatch'>
                  <i style={{ color: '#58ACFA' }} className="fab fa-facebook"></i>
                </a>
                <a href='https://www.instagram.com/engmatch'>
                  <i style={{ color: '#FA8258' }} className="fab fa-instagram-square"></i>
                </a>
                <a href='https://www.youtube.com/channel/UCVXrXbtfT_yVgiOo9bAXgtw'>
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
                <p>Phone number: 0869 246 882</p>
                <p>Email address: Engmatch2021@gmail.com</p>
                <p>Mailing address: 144 Xuan Thuy, Dich Vong Hau, Cau Giay, Ha Noi</p>
                <div className='social-networks'>
                  <a href='https://www.facebook.com/engmatch'>
                    <i style={{ color: '#58ACFA' }} className="fab fa-facebook"></i>
                  </a>
                  <a href='https://www.instagram.com/engmatch'>
                    <i style={{ color: '#FA8258' }} className="fab fa-instagram-square"></i>
                  </a>
                  <a href='https://www.youtube.com/channel/UCVXrXbtfT_yVgiOo9bAXgtw'>
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