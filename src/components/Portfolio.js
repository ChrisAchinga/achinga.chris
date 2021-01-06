import { Container, Card, Button, Col } from 'react-bootstrap'

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
              <i className='fas fa-plane-departure'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          <div className='row justify-content-center'>

            <Col md={6} lg={4} mb={5} className="mt-5">
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={cabin} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className="mt-5">
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={cake} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className="mt-5">
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={circus} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className="mt-5">
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={game} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className="mt-5">
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={safe} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className="mt-5">
              <Card className='portfolio-item mx-auto'>
                <Card.Img
                  className='img-fluid'
                  src={submarine}
                  alt='Tasty Cake'
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
