const Hero = ({ myName }) => {
  return (
    <section className='mt-4'>
      <div className='masthead bg-primary text-white text-center'>
        <div className='container d-flex align-items-center flex-column'>
          {/* <!-- Masthead Avatar Image--> */}
          <img
            className='masthead-avatar mb-5'
            src='assets/img/avataaars.svg'
            alt=''
          />
          {/* <!-- Masthead Heading--> */}
          <h1 className='masthead-heading mb-0'>{myName}</h1>
          {/* <!-- Icon Divider--> */}
          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fas fa-plane'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          {/* <!-- Masthead Subheading-->ssss */}
          <p className='pre-wrap masthead-subheading font-weight-light mb-0'>
            Developer | Writer | Friend | Flightr
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
