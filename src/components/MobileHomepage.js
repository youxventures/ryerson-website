/** @jsx jsx */
import { jsx, Container, Box, Heading } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useEffect, useRef, useState } from 'react'
import Img from 'gatsby-image'
import Menu from '../components/Menu'
import PillarLinks from '../components/PillarLinks'
import Footer from '../components/Footer'
import Logo from '../images/logo.svg'
import lottie from 'lottie-web'

import homeAnimation from '../animations/homepage1_webp.json'

export default () => {
const {
    homepage2,
    homepage3,
    homepage4,
    homepage5,
    homepage6
  } = useStaticQuery(
    graphql`
      query {
        homepage2: file(relativePath: { eq: "homepage2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage3: file(relativePath: { eq: "homepage3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage4: file(relativePath: { eq: "homepage4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage5: file(relativePath: { eq: "homepage5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage6: file(relativePath: { eq: "homepage6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
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
      image: homepage2,
      bgColor: '#b8d9ef',
      textColor: '#000'
    },
    {
      heading: 'Empowering communities to grow fresh food and produce clean water.',
      image: homepage3,
      bgColor: '#000',
      textColor: '#fff'
    },
    {
      heading: 'Merging creativity with tech to transform our experiences.',
      image: homepage4,
      bgColor: '#f9f9f9',
      textColor: '#000'
    },
    {
      heading: 'Advocating for a world free of inequities and inequalities.',
      image: homepage5,
      bgColor: '#8dd4d9',
      textColor: '#000'
    },
    {
      heading: 'And ensuring everyone has a place to call home.',
      image: homepage6,
      bgColor: '#b7d7ee',
      textColor: '#000'
    }
  ]

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'canvas',
      loop: false,
      autoplay: false,
      animationData: homeAnimation,
    })

    anim.addEventListener('DOMLoaded', () => {
      animationRef.current.style.opacity = 1
      heading1Ref.current.style.opacity = 1

      setTimeout(() => {
        anim.play()
      }, 750)
    })
  }, [])

  return (
    <Box sx={{ position: 'relative' }}>
      <header sx={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: ['96px', '130px', '130px'],
        zIndex: 10,
        backgroundColor: showMenu ? 'white' : 'transparent',
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
          mb: '-16px',
          opacity: 0,
          transition: 'opacity 1.5s ease-in-out',
          transform: 'scale(2.75)',
          transformOrigin: 'bottom'
        }}>
        </Box>
        <Container sx={{
          position: 'absolute',
          top: '120px',
          left: 0
        }}>
          <Heading ref={heading1Ref} sx={{
            fontSize: ['4.5vh', '2rem', '2.5rem'],
            fontFamily: 'serif',
            fontWeight: 'bold',
            transition: 'opacity 1.5s ease-in-out',
            transitionDelay: '1s',
            opacity: 0
          }}>
            To us, innovation means building a brighter future for us all.
          </Heading>
        </Container>
      </Box>

      {images.map(({ image, heading, bgColor, textColor }) => (
        <Box sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          backgroundColor: bgColor
        }}>
          <Img fluid={image.childImageSharp.fluid} sx={{
            display: 'block',
            width: '100%',
            height: '65%'
          }} />
          <Container sx={{
            position: 'absolute',
            top: '100px'
          }}>
            <Heading sx={{
              fontSize: ['4vh', '4.75vh', '2.5rem'],
              fontFamily: 'serif',
              fontWeight: 'bold',
              transition: 'opacity 2.5s ease-in-out',
              willChange: 'opacity',
              color: textColor
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
        <Container sx={{ width: '100%' }}>
          <Heading sx={{
            mt: '100px',
            mb: '60px',
            fontFamily: 'serif',
            fontWeight: 'bold',
            fontSize: '48px'
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
              title="ryerson at a glance"
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/0wNNKU30v3Y?controls=0"
              frameBorder="0"
              allowFullScreen />
          </Box>

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

