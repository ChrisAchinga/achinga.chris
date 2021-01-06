import {Container} from 'react-bootstrap'

// images
import cabin from '../img/portfolio/cabin.png'
import cake from '../img/portfolio/cake.png'
import circus from '../img/portfolio/circus.png'
import game from '../img/portfolio/game.png'
import safe from '../img/portfolio/safe.png'
import submarine from '../img/portfolio/submarine.png'

const Portfolio = () => {
  return (
    <>
      <section className='page-section portfolio' id='portfolio'>
        <Container>
          <div className='text-center'>
            <h2 className='page-section-heading text-secondary mb-0 d-inline-block text-capitalize'>
              my portfolio
            </h2>
          </div>
          <div className='divider-custom'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
            <i className="fas fa-plane-departure"></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4 mb-5'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal0'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={cabin} alt='Log Cabin' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-5'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal1'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={cake} alt='Tasty Cake' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-5'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal2'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={circus} alt='Circus Tent' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-5'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal3'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={game} alt='Controller' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-5'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal4'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={safe} alt='Locked Safe' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-5'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal5'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={submarine} alt='Submarine' />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
