import './App.css'
import Menu from './components/Menu'
import About from './components/About'
// import Experience from './components/Experience'
// import Education from './components/Education'
// import Skills from './components/Skills'
// import Interest from './components/Interest'
// import Awards from './components/Awards'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Menu />
      <div className='container-fluid p-0'>
        <About />
        <hr className='m-0' />
        {/* <Experience /> */}
        {/* <hr className='m-0' /> */}
        {/* <Education /> */}
        {/* <hr className='m-0' /> */}
        {/* <Skills /> */}
        {/* <hr className='m-0' /> */}
        {/* <Interest /> */}
        {/* <hr className='m-0' /> */}
        {/* <Awards /> */}
        {/* <hr className='m-0' /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
