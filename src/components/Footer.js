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
            fluid(maxWidth: 140, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
      height: [null, null, '240px'],
      mt: [6, 6, 7],
      py: [4, 4, null],
      backgroundColor: 'footer',
      color: 'white'
    }}>
      <Container sx={{
        display: 'flex',
        flexDirection: ['column-reverse', 'column-reverse', 'row'],
        alignItems: ['center', 'center', 'flex-end']
      }}>
        <Flex sx={{
          flex: 1,
          width: '100%',
          flexDirection: ['row', 'row', 'column'],
          justifyContent: ['space-between', 'space-between', 'space-between'],
          alignItems: ['flex-end', 'flex-end', 'flex-start'],
          mt: [5, 5, 0]
        }}>
          <a href="https://www.ryerson.ca/">
            <Img fluid={logo.childImageSharp.fluid} sx={{ width: ['120px', '120px', '140px'] }} />
          </a>
          <Text sx={{ mt: [0, 0, 6], mb: [0, 0, '8px'], fontSize: '14px' }}><a href="https://www.ryerson.ca/terms-conditions/" sx={{ color: 'white' }}>Terms & Conditions</a></Text>
        </Flex>
        <Flex sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '155px',
          width: ['100%', '100%', 'auto']
        }}>
          <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
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
                ml: 5,
                width: '40px',
                height: '40px'
              }}/>
          </Flex>
          <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
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
                ml: 5,
                width: '40px',
                height: '40px'
              }}/>
          </Flex>
          <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            <a href="https://www.ryerson.ca/" sx={{ color: 'white' }}>ryerson.ca</a>
            <img src={Arrow} alt="arrow" sx={{
                ml: 5,
                width: '40px',
                height: '40px'
              }}/>
          </Flex>
        </Flex>
      </Container>
    </footer>
  )
}
