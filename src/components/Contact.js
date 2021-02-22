import {Container, Col, Row} from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <section className='page-section' id='contact'>
        <Container>
          <div className='text-center'>
            <h2 className='page-section-heading text-secondary d-inline-block mb-0 text-capitalize'>
              contact
            </h2>
          </div>
          <div className='divider-custom'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='far fa-address-card'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          <Row className='justify-content-center'>
            <Col lg={4}>
              <div className='d-flex flex-column align-items-center'>
                <div className='icon-contact mb-3'>
                  <i className='fas fa-mobile-alt'></i>
                </div>
                <div className='text-muted'>Call/SMS</div>
                <a
                  className='lead font-weight-bold'
                  href='tel:+254740428522'
                >
                  +254 740 428-522
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className='d-flex flex-column align-items-center'>
                <div className='icon-contact mb-3'>
                  <i className='far fa-envelope'></i>
                </div>
                <div className='text-muted'>Email</div>
                <a
                  className='lead font-weight-bold'
                  href='mailto:achinga.chris@gmail.com'
                >
                  achinga.chris@gmail.com
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
