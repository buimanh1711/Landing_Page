import MySlick from "../../global/Slick"

const Reviews = () => {
  return (
    <>
      <div className='reviews animate__animated animate__backInUp'>
        <div className='container'>
          <div className='reviews-container'>
            <h1><i className="far fa-comments"></i> Customer Reviews:</h1>
            <MySlick>
              <div className='review-wrapper'>
                <p>
                  I'm an English beginner. At first, my speaking is very terrible, I even get a C in every test because of my horrible pronunciation and ideas. But only few days with Engmatch before my final exam, my speaking has a dramatically improvement. This program suggests me many useful ideas as well as vocabularies in every topics. I can also find partners with same problems and level with me to practice so that we can improve our skills together.
                  <br />Thanks Engmatch for helping us.
              </p>
              </div>
              <div className='review-wrapper'>
                <p>
                  I have learnt English for almost 6 years, and I've got an 6.0 in Speaking Test of IELTS. I were introduced this program by my friends, and we both register accounts for practicing. After 3 months spending time learning and practicing with this program, in my latest IELTS test, I've got an 7.0 in speaking. This program is not only an useful program for beginners to practice but also a suitable place for advanced students like me, it also provides me a teacher to help me improve my pronunciation, too. I was overdose by the IELTS topics that they updated in the websites. I believe that EngMatch is the best choice for English learners.
                  <br />- Mai, ULIS-VNU
              </p>
              </div>
              <div className='review-wrapper'>
                <p>
                  I'm an English beginner. At first, my speaking is very terrible, I even get a C in every test because of my horrible pronunciation and ideas. But only few days with Engmatch before my final exam, my speaking has a dramatically improvement. This program suggests me many useful ideas as well as vocabularies in every topics. I can also find partners with same problems and level with me to practice so that we can improve our skills together.

                  Thanks Engmatch for helping us.
              </p>
              </div>
            </MySlick>
          </div>
        </div>
      </div>
      <div className='email'>
        <div className='container'>
          <div className='email-container'>
            <form>
              <label for='email'>
                Enter your email for latest informations
          </label>
              <input name='email' placeholder='example@mail.com' />
              <button>Send <i className="far fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </>


  )
}

export default Reviews