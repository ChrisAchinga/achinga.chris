import React from 'react'
import { Card } from 'react-bootstrap'

const Project = ({ project }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/project/${project.route}`}>
        <Card.Img src={project.image} alt='image not added' />
      </a>

      <Card.Body>
        <a href={`/project/${project.route}`}>
          <Card.Title>
            <strong>{project.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
      <Card.Text>
        <p>{project.briefDescription}</p>
      </Card.Text>
    </Card>
  )
}

export default Project
