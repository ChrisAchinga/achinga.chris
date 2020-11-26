import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import ProjectScreen from './screens/ProjectScreen'
import ArticleScreen from './screens/ArticleScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Chris Achinga</h1>
          <ProjectScreen />
          <ArticleScreen />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
