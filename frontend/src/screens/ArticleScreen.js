import React from 'react'
import { Row, Col } from 'react-bootstrap'

import articles from '../data/articles'

const ArticleScreen = () => {
    return (
        <>
        <h1>My Articles</h1>
        <Row>
          {articles.map((article) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <h3>{article.name}</h3>
            </Col>
          ))}
        </Row>
      </>
    )
}

export default ArticleScreen
