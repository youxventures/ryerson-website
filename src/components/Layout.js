/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <React.Fragment>
    <Header />

    <Container as="main" id="site-content" role="main">
      {children}
    </Container>

    <Footer />
  </React.Fragment>
)
