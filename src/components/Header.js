import portfolioImage from '../img/avataaars.svg'

const Header = () => {
  return (
    <>
      <header className='masthead bg-primary text-white text-center'>
        <div className='container d-flex align-items-center flex-column'>
          <img class='masthead-avatar mb-5' src={portfolioImage} alt='' />
          <h1 class='masthead-heading mb-0'>START BOOTSTRAP</h1>
          <div class='divider-custom divider-light'>
            <div class='divider-custom-line'></div>
            <div class='divider-custom-icon'>
              <i class='fas fa-star'></i>
            </div>
            <div class='divider-custom-line'></div>
          </div>
          <p class='pre-wrap masthead-subheading font-weight-light mb-0'>
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
