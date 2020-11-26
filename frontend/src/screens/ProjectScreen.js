import React from 'react'
import { Row, Col } from 'react-bootstrap'

import projects from '../data/projects'
import Project from '../components/Project'

const ProjectScreen = () => {
  return (
    <>
      <h1>My Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProjectScreen
