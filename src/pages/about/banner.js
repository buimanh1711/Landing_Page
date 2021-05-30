import { useEffect } from "react"

const AboutBanner = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    scrollTop()
  }, [])
  return (
    <div className='about-banner animate__animated animate__pulse'>
      <div className='banner-container'>
        <img src='/images/aboutus.png' />
      </div>
    </div>
  )
}

export default AboutBanner