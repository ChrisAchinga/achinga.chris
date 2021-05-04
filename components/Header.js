import { Image, Container } from 'react-bootstrap'


const Header = () => {
  return (
    <>
      <header className='masthead bg-primary text-white text-center'>
        <Container className='d-flex align-items-center flex-column'>
          <Image
            src='/images/me.jpg'
            className='masthead-avatar mb-5'
            roundedCircle
          />
          <h1 className='masthead-heading mb-0 text-uppercase'>chris achinga</h1>
          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
            <i className="fas fa-power-off"></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          <p className='pre-wrap masthead-subheading font-weight-light mb-0'>
            Software Developer (human)
          </p>
        </Container>
      </header>
    </>
  )
}

export default Header