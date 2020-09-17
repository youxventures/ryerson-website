/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../fonts/replica.css'
import '../fonts/lyon.css'

export default ({ children, bgColor }) => (
  <React.Fragment>
    <Header bgColor={bgColor} />

    <main role="main">
      {children}
    </main>

    <Footer />
  </React.Fragment>
)
