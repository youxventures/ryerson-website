/** @jsx jsx */
import { jsx, Container, Heading, Text } from 'theme-ui'
import React from "react"

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <Container sx={{ my: 6 }}>
      <Heading sx={{ fontSize: '38px' }}>Page not found.</Heading>
    </Container>
  </Layout>
)

export default NotFoundPage
