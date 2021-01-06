import cabin from '../img/portfolio/cabin.png'
import cake from '../img/portfolio/cake.png'
import circus from '../img/portfolio/circus.png'
import game from '../img/portfolio/game.png'
import safe from '../img/portfolio/safe.png'
import submarine from '../img/portfolio/submarine.png'

const Portfolio = () => {
  return (
    <>
      <section class='page-section portfolio' id='portfolio'>
        <div class='container'>
          <div class='text-center'>
            <h2 class='page-section-heading text-secondary mb-0 d-inline-block'>
              PORTFOLIO
            </h2>
          </div>
          <div class='divider-custom'>
            <div class='divider-custom-line'></div>
            <div class='divider-custom-icon'>
              <i class='fas fa-star'></i>
            </div>
            <div class='divider-custom-line'></div>
          </div>
          <div class='row justify-content-center'>
            <div class='col-md-6 col-lg-4 mb-5'>
              <div
                class='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal0'
              >
                <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div class='portfolio-item-caption-content text-center text-white'>
                    <i class='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  class='img-fluid'
                  src={cabin}
                  alt='Log Cabin'
                />
              </div>
            </div>
            <div class='col-md-6 col-lg-4 mb-5'>
              <div
                class='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal1'
              >
                <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div class='portfolio-item-caption-content text-center text-white'>
                    <i class='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  class='img-fluid'
                  src={cake}
                  alt='Tasty Cake'
                />
              </div>
            </div>
            <div class='col-md-6 col-lg-4 mb-5'>
              <div
                class='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal2'
              >
                <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div class='portfolio-item-caption-content text-center text-white'>
                    <i class='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  class='img-fluid'
                  src={circus}
                  alt='Circus Tent'
                />
              </div>
            </div>
            <div class='col-md-6 col-lg-4 mb-5'>
              <div
                class='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal3'
              >
                <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div class='portfolio-item-caption-content text-center text-white'>
                    <i class='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  class='img-fluid'
                  src={game}
                  alt='Controller'
                />
              </div>
            </div>
            <div class='col-md-6 col-lg-4 mb-5'>
              <div
                class='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal4'
              >
                <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div class='portfolio-item-caption-content text-center text-white'>
                    <i class='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  class='img-fluid'
                  src={safe}
                  alt='Locked Safe'
                />
              </div>
            </div>
            <div class='col-md-6 col-lg-4 mb-5'>
              <div
                class='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal5'
              >
                <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div class='portfolio-item-caption-content text-center text-white'>
                    <i class='fas fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  class='img-fluid'
                  src={submarine}
                  alt='Submarine'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
