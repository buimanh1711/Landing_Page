import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='about-container'>
          <div className='info'>
            <h1>About EngMatch</h1>
            <p>Where you can find the most suitable partners to practice your English.</p>
          </div>
          <div className='description'>
            <p>
              EngMatch provides spaces for everyone who wants to practice English, as well as helps learners to find soulmates that share in common. We have a huge sources of topics and example dialogues for learners to start practicing. If you want to improve your speaking skill, our EngMatch is the most suitable choice.
            </p>
          </div>
        </div>
        <div className='see-more'>
          <Link className='see-more-btn' to='/about'>Learn more <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout