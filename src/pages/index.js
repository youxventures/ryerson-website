/** @jsx jsx */
import { jsx, Container, Box, Heading, Text } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Img from 'gatsby-image'
import Menu from '../components/Menu'
import PillarLinks from '../components/PillarLinks'
import Footer from '../components/Footer'
import DesktopHomepage from '../components/DesktopHomepage'
import Logo from '../images/logo.svg'
import lottie from 'lottie-web'
import { useMediaQuery } from 'react-responsive'

import homeAnimation from '../animations/homepage1.json'

export default () => {
  const { width: windowWidth } = useWindowSize()
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  const {
    homepage2,
    homepage3,
    homepage4,
    homepage5,
    homepage6,
    homepage2_landscape,
    homepage3_landscape,
    homepage4_landscape,
    homepage5_landscape,
    homepage6_landscape
  } = useStaticQuery(
    graphql`
      query {
        homepage2: file(relativePath: { eq: "homepage2_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage3: file(relativePath: { eq: "homepage3_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage4: file(relativePath: { eq: "homepage4_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage5: file(relativePath: { eq: "homepage5_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage6: file(relativePath: { eq: "homepage6_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage2_landscape: file(relativePath: { eq: "homepage2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage3_landscape: file(relativePath: { eq: "homepage3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage4_landscape: file(relativePath: { eq: "homepage4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage5_landscape: file(relativePath: { eq: "homepage5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage6_landscape: file(relativePath: { eq: "homepage6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const [showMenu, setShowMenu] = useState(false)

  const videoRef = useRef()
  const animationRef = useRef()
  const heading1Ref = useRef()

  const images = [
    {
      heading: 'It means building cities and economies that take care of our people and our planet.',
      image: isLandscape ? homepage2_landscape : homepage2,
      bgColor: '#b8d9ef',
      textColor: '#000'
    },
    {
      heading: 'Empowering communities to grow fresh food and produce clean water.',
      image: isLandscape ? homepage3_landscape : homepage3,
      bgColor: '#000',
      textColor: '#fff'
    },
    {
      heading: 'Merging creativity with tech to transform our experiences.',
      image: isLandscape ? homepage4_landscape : homepage4,
      bgColor: '#f9f9f9',
      textColor: '#000'
    },
    {
      heading: 'Advocating for a world free of inequities and inequalities.',
      image: isLandscape ? homepage5_landscape : homepage5,
      bgColor: '#8dd4d9',
      textColor: '#000'
    },
    {
      heading: 'And ensuring everyone has a place to call home.',
      image: isLandscape ? homepage6_landscape : homepage6,
      bgColor: '#b7d7ee',
      textColor: '#000'
    }
  ]

  useEffect(() => {
    if (!animationRef || !animationRef.current)
      return

    const anim = lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: homeAnimation,
    })

    anim.addEventListener('DOMLoaded', () => {
      if (!animationRef || !animationRef.current)
        return

      animationRef.current.style.opacity = 1
      heading1Ref.current.style.opacity = 1

      setTimeout(() => {
        anim.play()
      }, 750)
    })
  }, [])

  if (windowWidth > 900) {
    return <DesktopHomepage />
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <h1 sx={{
        fontSize: '0px',
        width: '1px',
        height: '1px',
        display: 'inline-block',
        overflow: 'hidden',
        position: 'absolute !important',
        border: '0 !important',
        padding: '0 !important',
        margin: '0 !important',
        clip: 'rect(1px,1px,1px,1px)',
      }}>
        A World of Innovation - Ryerson University
      </h1>

      <header sx={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: ['96px', '130px', '130px'],
        zIndex: 10,
        backgroundColor: showMenu ? 'white' : 'transparent',
        transition: 'background-color .5s ease-in-out',
      }}>
        <Container sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <Link to="/">
            <img src={Logo} alt="logo" sx={{ width: ['110px', '120px'] }} />
          </Link>

          <Menu showMenu={showMenu} setShowMenu={setShowMenu} homePage={true} />
        </Container>
      </header>

      <Box sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: '#8bd4f7'
      }}>
        <Box ref={animationRef} sx={{
          position: 'absolute',
          width: isLandscape ? '600px' : '900px',
          left: isLandscape ? '50%' : '-60%',
          transform: isLandscape ? 'translateX(-50%)' : null,
          mb: '-12px',
          opacity: 0,
          transition: 'opacity 1.5s ease-in-out',
          transitionDelay: '1s',
        }}>
        </Box>
        <Container sx={{
          position: 'absolute',
          top: '120px',
          left: 0
        }}>
          <Heading ref={heading1Ref} sx={{
            fontSize: ['4vh', '1.5rem', '2.5rem'],
            fontFamily: 'serif',
            fontWeight: 'bold',
            transition: 'opacity 1.5s ease-in-out',
            transitionDelay: '1s',
            opacity: 0,
            maxWidth: isLandscape ? '320px' : '300px',
          }}>
            To us, innovation means building a brighter future for everyone.
          </Heading>
        </Container>
      </Box>

      {images.map(({ image, heading, bgColor, textColor }, i) => (
        <Box key={i} sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          backgroundColor: bgColor
        }}>
          <Img fluid={image.childImageSharp.fluid} sx={{
            display: 'block',
            width: '100%',
            margin: isLandscape ? '5% 5% 0' : null,
            height: isLandscape ? '100%' :'75%'
          }} />
          <Container sx={{
            position: 'absolute',
            top: isLandscape ? '50px' : '70px'
          }}>
            <Heading sx={{
              fontSize: ['4vh', '1.5rem', '2.5rem'],
              fontFamily: 'serif',
              fontWeight: 'bold',
              transition: 'opacity 2.5s ease-in-out',
              willChange: 'opacity',
              color: textColor,
              maxWidth: isLandscape ? '290px' : null
            }}>
              {heading}
            </Heading>
          </Container>
        </Box>
      ))}

      <Box sx={{
        backgroundColor: '#fff',
        transition: 'opacity 2.5s ease-in-out',
        willChange: 'opacity'
      }}>
        <Container id="homepage_video" sx={{ width: '100%' }}>
          <Heading sx={{
            mt: '100px',
            mb: '60px',
            fontFamily: 'serif',
            fontWeight: 'bold',
            fontSize: isLandscape ? '28px' : '30px'
          }}>
            Watch our vision for the future unfold:
          </Heading>

          <Box sx={{
            position: 'relative',
            paddingBottom: '56.25%',
            overflow: 'hidden',
            maxWidth: '100%',
            height: 0
          }}>
            <iframe
              ref={videoRef}
              title="Ryerson at a glance"
              width="100%"
              src="https://www.youtube.com/embed/0wNNKU30v3Y?enablejsapi=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
          </Box>

          <Text sx={{
            mt: '1.25rem',
            fontSize: '1rem',
            'span': {
              fontWeight: 'bold'
            }
          }}>Narrated by Ryerson Honorary Doctorate <span>Eric McCormack</span></Text>

          <Heading sx={{
            my: 6,
            fontSize: ['30px', '32px', '36px'],
            fontWeight: 'bold'
          }}>
            Our research and innovation is focused on key areas with the potential to improve life for people here and around the globe.
          </Heading>

          <PillarLinks />
        </Container>
        <Footer />
      </Box>
    </Box>
  )
}
