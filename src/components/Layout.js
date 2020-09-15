/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default ({ children, bgColor }) => (
  <React.Fragment>
    <Header bgColor={bgColor} />

    <main role="main">
      {children}
    </main>

    <Footer />
  </React.Fragment>
)
