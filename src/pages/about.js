import React from 'react'
import { Container } from 'theme-ui'
import Layout from '../components/Layout'
import '../styles/about.css'

// heading is not visible becuase
//
// main > div > h1 {
//   display: none;
// }
//
// is set in article.css

export default () => {
  return (
    <Layout>
      <Container>
        <h1 className="about-heading">ryerson is cool</h1>
        <p className="about-heading">we have a beach on our top floor</p>
      </Container>
    </Layout>
  )
}

