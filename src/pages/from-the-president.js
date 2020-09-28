import React from 'react'
import { Container } from 'theme-ui'
import Layout from '../components/Layout'
import '../styles/from-the-president.css'

export default () => {
  return (
    <Layout>
      <Container>
        <h1 className="president-heading">hey kids</h1>
        <p className="president-text">hello from the president</p>
      </Container>
    </Layout>
  )
}

