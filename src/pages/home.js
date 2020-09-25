/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import PillarLinks from '../components/PillarLinks'

export default () => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.body.style.height = '100%'

    setTimeout(() => {
      containerRef.current.style.transition = 'opacity .25s ease-in-out'
      containerRef.current.style.opacity = 1
    }, 500)
  }, [])

  return (
    <Layout>
      <Container ref={containerRef} style={{ opacity: 0 }}>
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
}
