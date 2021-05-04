// layout
import Layout from '@layouts/Layout'

// components
import About from '@components/About'
import Portfolio from '@components/Portfolio'
import Contact from '@components/Contact'

const Home = () => {
  return (
    <Layout>
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  )
}

export default Home
