/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <Container sx={{ my: 6 }}>
      <Heading sx={{ fontSize: '38px' }}>Loading...</Heading>
    </Container>
  </Layout>
)

export default NotFoundPage
