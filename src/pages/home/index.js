import HomeAbout from "./About"
import HomeBanner1 from "./Banner1"
import Partials from "./Partials"
import Reviews from "./Reviewer"

const Home = () => {
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