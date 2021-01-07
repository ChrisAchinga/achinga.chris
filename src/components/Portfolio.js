import { Container, Card, Button, Col, Row } from 'react-bootstrap'

// images
import cabin from '../img/portfolio/cabin.png'
import cake from '../img/portfolio/cake.png'
import circus from '../img/portfolio/circus.png'
import game from '../img/portfolio/game.png'
import safe from '../img/portfolio/safe.png'
import submarine from '../img/portfolio/submarine.png'

const Portfolio = () => {
  const portfolio = [
    {}
  ]
  return (
    <>
      <section className='page-section portfolio' id='skills'>
        <Container>
          <div className='text-center'>
            <h2 className='page-section-heading text-secondary mb-0 d-inline-block text-capitalize'>
              my skills
            </h2>
          </div>
          <div className='divider-custom'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fas fa-plane-departure'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          <div className='text-center'>
            <button className='btn text-secondary mb-0 d-inline-block text-capitalize'>
              view my resume
            </button>
          </div>
          <Row className='justify-content-center'>
            <Col md={6} lg={4} mb={5} className='mt-5'>
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={cabin} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>FrontEnd</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant='primary'>Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className='mt-5'>
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={cake} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>BackEnd</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant='primary'>Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className='mt-5'>
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={circus} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>REST APIs</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant='primary'>Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className='mt-5'>
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={game} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>Version Control</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant='primary'>Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className='mt-5'>
              <Card className='portfolio-item mx-auto'>
                <Card.Img className='img-fluid' src={safe} alt='Tasty Cake' />
                <Card.Body>
                  <Card.Title>Soft Skills</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant='primary'>Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} mb={5} className='mt-5'>
              <Card className='portfolio-item mx-auto'>
                <Card.Img
                  className='img-fluid'
                  src={submarine}
                  alt='Tasty Cake'
                />
                <Card.Body>
                  <Card.Title>Team Work</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant='primary'>Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
