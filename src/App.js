import { Container } from 'react-bootstrap'

import './App.css'
import HomePage from './pages/HomePage'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavigationBar />

      <main>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
