import { Navbar, Nav, Container } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
          <Navbar.Brand href='#home'>Chris Achinga</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/projects'>Projects</Nav.Link>
              <Nav.Link href='/blogs'>Blogs</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default NavigationBar
