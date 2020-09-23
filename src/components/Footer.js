/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default () => (
  <footer sx={{
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    mt: 6,
    backgroundColor: 'footer',
    color: 'white'
  }}>
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <AniLink
        paintDrip to={`/from-the-president`}
        hex="#fff"
        duration={1.5}
        sx={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        From the President
      </AniLink>
      <AniLink
        paintDrip to={`/about`}
        hex="#fff"
        duration={1.5}
        sx={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        About
      </AniLink>
    </Container>
  </footer>
)