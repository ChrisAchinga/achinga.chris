import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Project = ({ project }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/project/${project.route}`}>
        <Card.Img src={project.image} alt='image not added' />
      </Link>

      <Card.Body>
        <Link to={`/project/${project.route}`}>
          <Card.Title>
            <strong>{project.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text>
        <p>{project.briefDescription}</p>
      </Card.Text>
    </Card>
  )
}

export default Project
