/** @jsx jsx */
import { jsx, Container, Box, Heading } from 'theme-ui'
import { Link } from 'gatsby'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Menu from '../components/Menu'
import PillarLinks from '../components/PillarLinks'
import Footer from '../components/Footer'
import Logo from '../images/logo.svg'
import lottie from 'lottie-web'

import homeAnimation1 from '../animations/homepage1_webp.json'
import homeAnimation2 from '../animations/homepage2_webp.json'
import homeAnimation3 from '../animations/homepage3_webp.json'
import homeAnimation4 from '../animations/homepage4_webp.json'
import homeAnimation5 from '../animations/homepage5_webp.json'
import homeAnimation6 from '../animations/homepage6_webp.json'

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export default () => {
  const { height: windowHeight } = useWindowSize()
  const [currentPage, setCurrentPage] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [loadedAnimations, setLoadedAnimations] = useState([])

  const pageContainerRef = useRef()
  const headerRef = useRef()

  const heading1Ref = useRef()
  const heading2Ref = useRef()
  const heading3Ref = useRef()
  const heading4Ref = useRef()
  const heading5Ref = useRef()
  const heading6Ref = useRef()

  const animation1Ref = useRef()
  const animation2Ref = useRef()
  const animation3Ref = useRef()
  const animation4Ref = useRef()
  const animation5Ref = useRef()
  const animation6Ref = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.style.height = `${window.innerHeight * 7 + 1564}px`
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const animationData = [
      homeAnimation2,
      homeAnimation3,
      homeAnimation4,
      homeAnimation5,
      homeAnimation6
    ]

    const refs = [
      animation2Ref,
      animation3Ref,
      animation4Ref,
      animation5Ref,
      animation6Ref
    ]

    const loadAnimations = async () => {
      let animations = []

      await asyncForEach(refs, async (ref, i) => {
        let anim = lottie.loadAnimation({
          container: ref.current,
          renderer: 'canvas',
          autoplay: false,
          loop: false,
          animationData: animationData[i]
        })

        anim.goToAndStop(anim.totalFrames-1, true)
        animations.push(anim)
      })

      setLoadedAnimations(animations)

      const anim = lottie.loadAnimation({
        container: animation1Ref.current,
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        animationData: homeAnimation1,
      })

      anim.addEventListener('DOMLoaded', () => {
        animation1Ref.current.style.opacity = 1
        headerRef.current.style.opacity = 1
        heading1Ref.current.style.opacity = 1
      })
    }

    loadAnimations()
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
        // loadedAnimations[0].play()
        heading2Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 1.5 && totalScroll < windowHeight * 3) {
        // loadedAnimations[1].play()
        heading3Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 2.5 && totalScroll < windowHeight * 4) {
        // loadedAnimations[2].play()
        heading4Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 3.5 && totalScroll < windowHeight * 5) {
        // loadedAnimations[3].play()
        heading5Ref.current.style.opacity = 1
      }

      if (totalScroll > windowHeight * 4.5 && totalScroll < windowHeight * 6) {
        // loadedAnimations[4].play()
        heading6Ref.current.style.opacity = 1
      }

      const currentPageNumber = totalScroll < windowHeight ? 0
        : totalScroll > windowHeight && totalScroll < windowHeight * 2 ? 1
        : totalScroll > windowHeight * 2 && totalScroll < windowHeight * 3 ? 2
        : totalScroll > windowHeight * 3 && totalScroll < windowHeight * 4 ? 3
        : totalScroll > windowHeight * 4 && totalScroll < windowHeight * 5 ? 4
        : totalScroll > windowHeight * 5 && totalScroll < windowHeight * 6 ? 5
        : totalScroll > windowHeight * 6 && totalScroll < windowHeight * 7 ? 6
        : 7

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
        : currentPage === 5 && totalScroll > windowHeight && totalScroll < windowHeight * 6
        ? `translateY(-${totalScroll - windowHeight * 5}px) translateZ(0px)`
        : currentPage === 6 && totalScroll > windowHeight && totalScroll < windowHeight * 7 + 1564
        ? `translateY(-${totalScroll - windowHeight * 6}px) translateZ(0px)`
        : `translateY(-${totalScroll - windowHeight * 7}px) translateZ(0px)`

      setCurrentPage(currentPageNumber)
      centerPage.style.transform = translateY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [windowHeight, currentPage, loadedAnimations])

  return (
    <div sx={{
      position: 'fixed',
      minWidth: '1024px',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#fff',
    }}>
      <div sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: '1'
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
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Link to="/home">
              <img src={Logo} alt="logo" sx={{ width: ['110px', '120px'] }} />
            </Link>

            <Menu showMenu={showMenu} setShowMenu={setShowMenu} homePage={true} />
          </Container>
        </header>

        <div ref={pageContainerRef} sx={{
          position: 'absolute',
          top: 0,
          left: ['-35%', '-35%', 0],
          height: '100%',
          width: '100%',
          transition: 'opacity 1.5s ease-in-out',
          willChange: 'opacity'
        }}>
          <Box ref={animation1Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ['1280px', '1280px', '2560px'],
            height: ['800px', '800px', '1600px'],
            maxWidth: '100%',
            maxHeight: '100%',
            padding: ['140px 140px 0', '140px 140px 0', 0],
            zIndex: 9,
            backgroundColor: '#8bd4f7',
            opacity: 0,
            overflow: 'hidden',
            transition: 'opacity 1.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <Heading ref={heading1Ref} sx={{
                position: 'absolute',
                top: ['-10px', '-10px', '180px'],
                left: [null, null, 0],
                transform: ['translateX(26px)', 'translateX(26px)', null],
                fontSize: ['24px', '24px', '36px'],
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '1.25s',
                willChange: 'opacity'
              }}>
                To us, innovation means<br />building a brighter future<br />for us all.
              </Heading>
            </Container>
          </Box>

          <Box ref={animation2Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ['1280px', '1280px', '2560px'],
            height: ['800px', '800px', '1600px'],
            maxWidth: '100%',
            maxHeight: '100%',
            padding: ['260px 260px 0', '260px 260px 0', 0],
            zIndex: 8,
            backgroundColor: '#b8d9ef',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <Heading ref={heading2Ref} sx={{
                position: 'absolute',
                top: ['-120px', '-120px', '180px'],
                left: [null, null, 0],
                transform: ['translateX(20px)', 'translateX(20px)', null],
                fontSize: ['24px', '24px', '36px'],
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '1s',
                willChange: 'opacity'
              }}>
                It means building cities<br />and economies that take<br />care of our people and<br />our planet.
              </Heading>
            </Container>
          </Box>

          <Box ref={animation3Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ['1280px', '1280px', '2560px'],
            height: ['800px', '800px', '1600px'],
            maxWidth: '100%',
            maxHeight: '100%',
            padding: ['260px 260px 0', '260px 260px 0', 0],
            zIndex: 7,
            backgroundColor: '#000',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <Heading ref={heading3Ref} sx={{
                position: 'absolute',
                top: ['-80px', '-80px', '180px'],
                left: [null, null, 0],
                transform: ['translateX(26px)', 'translateX(26px)', null],
                fontSize: ['24px', '24px', '36px'],
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '1s',
                willChange: 'opacity',
                color: 'white'
              }}>
                Empowering communities<br />to grow fresh food and<br />produce clean water.
              </Heading>
            </Container>
          </Box>

          <Box ref={animation4Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ['1280px', '1280px', '2560px'],
            height: ['800px', '800px', '1600px'],
            maxWidth: '100%',
            maxHeight: '100%',
            padding: ['140px 140px 0', '140px 140px 0', 0],
            zIndex: 6,
            backgroundColor: '#8bd4f7',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <Heading ref={heading4Ref} sx={{
                position: 'absolute',
                top: ['-10px', '-10px', '180px'],
                left: [null, null, 0],
                transform: ['translateX(26px)', 'translateX(26px)', null],
                fontSize: ['24px', '24px', '36px'],
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '1s',
                willChange: 'opacity'
              }}>
                Merging creativity with<br />tech to transform our<br />experiences.
              </Heading>
            </Container>
          </Box>

          <Box ref={animation5Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ['1280px', '1280px', '2560px'],
            height: ['800px', '800px', '1600px'],
            maxWidth: '100%',
            maxHeight: '100%',
            padding: ['260px 260px 0', '260px 260px 0', 0],
            zIndex: 5,
            backgroundColor: '#b8d9ef',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <Heading ref={heading5Ref} sx={{
                position: 'absolute',
                top: ['-100px', '-100px', '180px'],
                left: [null, null, 0],
                transform: ['translateX(26px)', 'translateX(26px)', null],
                fontSize: ['24px', '24px', '36px'],
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '1s',
                willChange: 'opacity'
              }}>
                Advocating for a world<br />free of inequities and<br />inequalities.
              </Heading>
            </Container>
          </Box>

          <Box ref={animation6Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ['1280px', '1280px', '2560px'],
            height: ['800px', '800px', '1600px'],
            maxWidth: '100%',
            maxHeight: '100%',
            padding: ['260px 260px 0', '260px 260px 0', 0],
            zIndex: 4,
            backgroundColor: '#000',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <Heading ref={heading6Ref} sx={{
                position: 'absolute',
                top: ['-100px', '-100px', '180px'],
                left: [null, null, 0],
                transform: ['translateX(26px)', 'translateX(26px)', null],
                fontSize: ['24px', '24px', '36px'],
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '1s',
                willChange: 'opacity',
                color: 'white'
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
            height: ['800px', '800px', '1600px'],
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 3,
            backgroundColor: '#fff',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
	        	<iframe title="ryerson at a glance" width="100%" height="100%" src="https://www.youtube.com/embed/0wNNKU30v3Y?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Box>

          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ['1280px', '1280px', '2560px'],
            height: '1564px',
            maxWidth: '100%',
            zIndex: 2,
            backgroundColor: '#fff',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container>
              <PillarLinks homePage />
            </Container>
            <Footer />
          </Box>
        </div>
      </div>
    </div>
  )
}

