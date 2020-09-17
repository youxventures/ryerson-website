/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui'
import { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import PillarLinks from '../components/PillarLinks'

export default () => {
  const containerRef = useRef(null)

  useEffect(() => {
    containerRef.current.style.transition = 'opacity .25s ease-in-out'
    containerRef.current.style.transitionDelay = '1s'
    containerRef.current.style.opacity = 1
  }, [])

  return (
    <Layout>
      <Container ref={containerRef} sx={{ opacity: 0 }}>
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

