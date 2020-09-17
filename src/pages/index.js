/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import Layout from '../components/Layout'
import PillarLinks from '../components/PillarLinks'

export default () => (
  <Layout>
    <Container>
      <Heading sx={{
        mt: 4,
        mb: 6,
        fontFamily: 'serif',
        fontSize: ['30px', '32px', '44px'],
        fontWeight: 'bold'
      }}>
        Our research and innovation is focused on key areas with the potential to improve life for people here and around the globe.
      </Heading>
      <PillarLinks />
    </Container>
  </Layout>
)
