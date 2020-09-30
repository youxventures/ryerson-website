/** @jsx jsx */
import { jsx, Container, Flex, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Arrow from '../images/arrow-white.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo-white-stacked.png" }) {
          childImageSharp {
            fluid(maxWidth: 140, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <footer sx={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '240px',
      mt: 6,
      backgroundColor: 'footer',
      color: 'white'
    }}>
      <Container sx={{ display: 'flex' }}>
        <Flex sx={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Img fluid={logo.childImageSharp.fluid} sx={{ width: '140px' }} />
          <Text sx={{ mt: 6 }}>© Ryerson University</Text>
        </Flex>
        <Flex sx={{
          flexDirection: 'column',
          '> * + *': {
            mt: '16px'
          }
        }}>
          <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '350px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            <AniLink
              paintDrip to={`/from-the-president`}
              hex="#fff"
              duration={1.5}
              sx={{ color: 'white' }}
            >
              From the President
            </AniLink>
            <img src={Arrow} alt="arrow" sx={{
                width: '45px',
                height: '45px'
              }}/>
          </Flex>
          <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '350px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            <AniLink
              paintDrip to={`/about`}
              hex="#fff"
              duration={1.5}
              sx={{ color: 'white' }}
            >
              About Ryerson
            </AniLink>
            <img src={Arrow} alt="arrow" sx={{
                width: '45px',
                height: '45px'
              }}/>
          </Flex>
          <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '350px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            <a href="https://ryerson.ca" sx={{ color: 'white' }}>ryerson.ca</a>
            <img src={Arrow} alt="arrow" sx={{
                width: '45px',
                height: '45px'
              }}/>
          </Flex>
        </Flex>
      </Container>
    </footer>
  )
}
