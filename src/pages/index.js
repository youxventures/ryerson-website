/** @jsx jsx */
import { jsx, Container, Box, Heading } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import Img from 'gatsby-image'
import useWindowSize from '../hooks/useWindowSize'
import Menu from '../components/Menu'
import SEO from '../components/SEO'
import PillarLinks from '../components/PillarLinks'
import Footer from '../components/Footer'
import Logo from '../images/logo.svg'
import lottie from 'lottie-web'
import MobileHomepage from '../components/MobileHomepage'
import { isMobile } from 'react-device-detect'

import homeAnimationWebp from '../animations/homepage1_webp.json'
import homeAnimation from '../animations/homepage1.json'

export default () => {
  if (isMobile) return <MobileHomepage />

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
            fluid(maxWidth: 2560, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage3: file(relativePath: { eq: "homepage3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage4: file(relativePath: { eq: "homepage4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage5: file(relativePath: { eq: "homepage5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        },
        homepage6: file(relativePath: { eq: "homepage6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const { height: windowHeight } = useWindowSize()
  const [currentPage, setCurrentPage] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const pageContainerRef = useRef()
  const headerRef = useRef()
  const videoRef = useRef()
  const heading1Ref = useRef()
  const heading2Ref = useRef()
  const heading3Ref = useRef()
  const heading4Ref = useRef()
  const heading5Ref = useRef()
  const heading6Ref = useRef()
  const animationRef = useRef()


  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.style.height = `${window.innerHeight * 6 + 2440}px`
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isNotSafari =
      navigator.userAgent.indexOf('Safari') > -1 &&
      navigator.userAgent.indexOf('Chrome') > -1

    const anim = lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'canvas',
      loop: false,
      autoplay: false,
      animationData: isNotSafari
        ? homeAnimationWebp
        : homeAnimation
    })

    anim.addEventListener('DOMLoaded', () => {
      animationRef.current.style.opacity = 1
      headerRef.current.style.opacity = 1
      heading1Ref.current.style.opacity = 1

      setTimeout(() => {
        anim.play()
      }, 250)
    })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      const totalScroll = window.scrollY
      const pages = pageContainerRef.current.childNodes

      const centerPage = pages.item(currentPage)
      const nextPage = pages.item(currentPage + 1)
      const prevPage = pages.item(currentPage - 1)

      if (prevPage) {
        prevPage.style.top = `${-windowHeight}px`
        prevPage.style.transform = null
        prevPage.style.opacity = 1
      }

      if (nextPage) {
        centerPage.style.top = 0
        nextPage.style.transform = null
        nextPage.style.top = 0
        nextPage.style.opacity = 1
      }

      if (totalScroll > windowHeight - windowHeight * .5 && totalScroll < windowHeight * 2) {
        heading2Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 1.5 && totalScroll < windowHeight * 3) {
        heading3Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 2.5 && totalScroll < windowHeight * 4) {
        heading4Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 3.5 && totalScroll < windowHeight * 5) {
        heading5Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 4.5 && totalScroll < windowHeight * 6) {
        heading6Ref.current.style.opacity = 1
      }


      videoRef.current.style.opacity = totalScroll > windowHeight * 5.5 ? 1 : 0
      headerRef.current.style.opacity = totalScroll > windowHeight * 5.75 ? 0 : 1

      const currentPageNumber = totalScroll < windowHeight ? 0
        : totalScroll > windowHeight && totalScroll < windowHeight * 2 ? 1
        : totalScroll > windowHeight * 2 && totalScroll < windowHeight * 3 ? 2
        : totalScroll > windowHeight * 3 && totalScroll < windowHeight * 4 ? 3
        : totalScroll > windowHeight * 4 && totalScroll < windowHeight * 5 ? 4
        : totalScroll > windowHeight * 5 && totalScroll < windowHeight * 6 ? 5
        : 6

      const translateY =
        currentPage === 0 && totalScroll < windowHeight ? `translateY(-${totalScroll}px) translateZ(0px)`
        : currentPage === 1 && totalScroll > windowHeight && totalScroll < windowHeight * 2
        ? `translateY(-${totalScroll - windowHeight}px) translateZ(0px)`
        : currentPage === 2 && totalScroll > windowHeight && totalScroll < windowHeight * 3
        ? `translateY(-${totalScroll - windowHeight * 2}px) translateZ(0px)`
        : currentPage === 3 && totalScroll > windowHeight && totalScroll < windowHeight * 4
        ? `translateY(-${totalScroll - windowHeight * 3}px) translateZ(0px)`
        : currentPage === 4 && totalScroll > windowHeight && totalScroll < windowHeight * 5
        ? `translateY(-${totalScroll - windowHeight * 4}px) translateZ(0px)`
        : currentPage === 5 && totalScroll > windowHeight && totalScroll < windowHeight * 6 + 1600
        ? `translateY(-${totalScroll - windowHeight * 5}px) translateZ(0px)`
        : `translateY(-${totalScroll - windowHeight * 6}px) translateZ(0px)`

      setCurrentPage(currentPageNumber)
      centerPage.style.transform = translateY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [windowHeight, currentPage])

  return (
    <React.Fragment>
      <SEO />
      <div sx={{
        position: 'fixed',
        minWidth: '1024px',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#fff'
      }}>
        <div sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          zIndex: '1',
          backgroundColor: '#8bd4f7'
        }}>
          <header ref={headerRef} sx={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: ['96px', '130px', '130px'],
            zIndex: 10,
            backgroundColor: showMenu ? 'white' : 'transparent',
            transition: 'all .5s ease-in-out',
            opacity: 0
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              px: '10vw'
            }}>
              <Link to="/">
                <img src={Logo} alt="logo" sx={{ width: ['110px', '120px'] }} />
              </Link>

              <Menu showMenu={showMenu} setShowMenu={setShowMenu} homePage={true} />
            </Box>
          </header>

          <div ref={pageContainerRef} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#8bd4f7',
            transition: 'opacity 1.5s ease-in-out',
            willChange: 'opacity'
          }}>

            <Box ref={animationRef} sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: ['100%', '100%', '2560px'],
              height: ['100%', '100%', '1600px'],
              maxWidth: '100%',
              maxHeight: '100%',
              zIndex: 8,
              backgroundColor: '#8bd4f7',
              opacity: 0,
              overflow: 'hidden',
              transition: 'opacity 1.5s ease-in-out',
              willChange: 'opacity',
              'canvas': {
                position: 'absolute',
                left: ['-30%', '-30%', 0]
              }
            }}>
              <Heading ref={heading1Ref} sx={{
                position: 'absolute',
                width: '100%',
                top: '20vh',
                left: '10vw',
                fontSize: '4.75vh',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 1,
                transition: 'opacity 2.5s ease-in-out',
                willChange: 'opacity',
              }}>
                To us, innovation means<br />building a brighter future<br />for everyone.
              </Heading>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: ['100%', '100%', '2560px'],
              height: ['100%', '100%', '1600px'],
              maxWidth: '100%',
              maxHeight: '100%',
              zIndex: 7,
              backgroundColor: '#b8d9ef',
              overflow: 'hidden',
              opacity: 0,
              transition: 'opacity 2.5s ease-in-out',
              willChange: 'opacity'
            }}>
              <Img fluid={homepage2.childImageSharp.fluid} sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                margin: '40px'
                }} />

              <Heading ref={heading2Ref} sx={{
                position: 'absolute',
                width: '100%',
                top: '20vh',
                left: '10vw',
                fontSize: '4.75vh',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 1,
                transition: 'opacity 2.5s ease-in-out',
                willChange: 'opacity',
                maxWidth: '1200px',
                display: 'block',
                margin: '0 auto'
              }}>
                It means building cities<br />and economies that take<br />care of our people and<br />our planet.
              </Heading>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: ['100%', '100%', '2560px'],
              height: ['100%', '100%', '1600px'],
              maxWidth: '100%',
              maxHeight: '100%',
              zIndex: 6,
              backgroundColor: '#000',
              overflow: 'hidden',
              opacity: 0,
              transition: 'opacity 2.5s ease-in-out',
              willChange: 'opacity'
            }}>
              <Img fluid={homepage3.childImageSharp.fluid} sx={{
                position: 'absolute',
                top: ['130px', '130px', '60px'],
                left: ['-490px', '-490px', 0],
                margin: ['80px', '80px', 0]
              }} />
              <Container>
                <Heading ref={heading3Ref} sx={{
                  position: 'absolute',
                  width: '100%',
                  top: '20vh',
                  left: '10vw',
                  fontSize: '4.75vh',
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  opacity: 1,
                  transition: 'opacity 2.5s ease-in-out',
                  willChange: 'opacity',
                  color: 'white'
                }}>
                  Empowering communities<br />to grow fresh food and<br />produce clean water.
                </Heading>
              </Container>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: ['100%', '100%', '2560px'],
              height: ['100%', '100%', '1600px'],
              maxWidth: '100%',
              maxHeight: '100%',
              zIndex: 5,
              backgroundColor: '#f9f9f9',
              overflow: 'hidden',
              opacity: 0,
              transition: 'opacity 2.5s ease-in-out',
              willChange: 'opacity'
            }}>
              <Img fluid={homepage4.childImageSharp.fluid} sx={{
                position: 'absolute',
                top: ['120px', '120px', 0],
                left: ['-360px', '-360px', 0],
                margin: ['80px', '80px', 0]
              }} />
              <Container>
                <Heading ref={heading4Ref} sx={{
                  position: 'absolute',
                  width: '100%',
                  top: '20vh',
                  left: '10vw',
                  fontSize: '4.75vh',
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  opacity: 1,
                  transition: 'opacity 2.5s ease-in-out',
                  willChange: 'opacity'
                }}>
                  Merging creativity with<br />tech to transform our<br />experiences.
                </Heading>
              </Container>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: ['100%', '100%', '2560px'],
              height: ['100%', '100%', '1600px'],
              maxWidth: '100%',
              maxHeight: '100%',
              zIndex: 4,
              backgroundColor: '#8dd4d9',
              overflow: 'hidden',
              opacity: 0,
              transition: 'opacity 2.5s ease-in-out',
              willChange: 'opacity'
            }}>
              <Img fluid={homepage5.childImageSharp.fluid} sx={{
                position: 'absolute',
                top: ['130px', '130px', '60px'],
                left: ['-300px', '-300px', '80px'],
                margin: ['80px', '80px', 0]
              }} />

              <Container>
                <Heading ref={heading5Ref} sx={{
                  position: 'absolute',
                  width: '100%',
                  top: '20vh',
                  left: '10vw',
                  fontSize: '4.75vh',
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  opacity: 1,
                  transition: 'opacity 2.5s ease-in-out',
                  willChange: 'opacity'
                }}>
                  Advocating for a world<br />free of inequities and<br />inequalities.
                </Heading>
              </Container>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: ['100%', '100%', '2560px'],
              height: ['100%', '100%', '1600px'],
              maxWidth: '100%',
              maxHeight: '100%',
              zIndex: 3,
              backgroundColor: '#b7d7ee',
              overflow: 'hidden',
              opacity: 0,
              transition: 'opacity 2.5s ease-in-out',
              willChange: 'opacity'
            }}>
              <Img fluid={homepage6.childImageSharp.fluid} sx={{
                position: 'absolute',
                top: ['130px', '130px', '60px'],
                left: ['-490px', '-490px', 0],
                margin: ['80px', '80px', 0]
              }} />
              <Container>
                <Heading ref={heading6Ref} sx={{
                  position: 'absolute',
                  width: '100%',
                  top: '20vh',
                  left: '10vw',
                  fontSize: '4.75vh',
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  opacity: 1,
                  transition: 'opacity 2.5s ease-in-out',
                  willChange: 'opacity',
                }}>
                  And ensuring everyone has<br />a place to call home.
                </Heading>
              </Container>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: ['1280px', '1280px', '2560px'],
              height: '2460px',
              maxWidth: '100%',
              zIndex: 2,
              backgroundColor: '#fff',
              overflow: 'hidden',
              opacity: 0,
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
                  height: 0
                }}>
                  <iframe
                    ref={videoRef}
                    title="Ryerson at a glance"
                    width="560"
                    height="349"
                    src="https://www.youtube.com/embed/0wNNKU30v3Y"
                    frameBorder="0"
                    allowFullScreen sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      transition: 'opacity 2.5s ease-in-out',
                      willChange: 'opacity'
                    }} />
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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

