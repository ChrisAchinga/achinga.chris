import Menu from './components/Menu'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <body id='page-top'>
        <Menu />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </body>
    </>
  )
}

export default App
