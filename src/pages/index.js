/** @jsx jsx */
import { jsx, Container, Box, Heading } from 'theme-ui'
import { Link, navigate } from 'gatsby'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Menu from '../components/Menu'
import PillarLinks from '../components/PillarLinks'
import Logo from '../images/logo.svg'
import lottie from 'lottie-web'

import homeAnimation1 from '../animations/homepage1.json'
import homeAnimation2 from '../animations/homepage2.json'
import homeAnimation3 from '../animations/homepage3.json'
import homeAnimation4 from '../animations/homepage1.json'
import homeAnimation5 from '../animations/homepage2.json'
import homeAnimation6 from '../animations/homepage3.json'

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
  const [allowScroll, setAllowScroll] = useState(false)

  const pageContainerRef = useRef()
  const headerRef = useRef()
  const arrowRef = useRef()

  const animation1Ref = useRef()
  const animation2Ref = useRef()
  const animation3Ref = useRef()
  const animation4Ref = useRef()
  const animation5Ref = useRef()
  const animation6Ref = useRef()

  const heading1Ref = useRef()
  const heading2Ref = useRef()
  const heading3Ref = useRef()
  const heading4Ref = useRef()
  const heading5Ref = useRef()
  const heading6Ref = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.style.height = `${window.innerHeight * 6}px`
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
        arrowRef.current.style.opacity = 1
        arrowRef.current.style.transform = 'translateY(25px)'
      })

      anim.addEventListener('complete', () => {
        setAllowScroll(true)
      })
    }

    loadAnimations()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const headingRefs = [
      heading2Ref,
      heading3Ref,
      heading4Ref,
      heading5Ref,
      heading6Ref
    ]

    const handleScroll = () => {
      const pages = pageContainerRef.current.childNodes

      let centerPage = pages.item(currentPage)
      let nextPage = pages.item(currentPage + 1)

      if (allowScroll) {
        setAllowScroll(false)

        if (!nextPage) {
          return
        } else {
          centerPage.style.opacity = 0

          setTimeout(() => {
            nextPage.style.opacity = 1
            if (headingRefs[currentPage]) headingRefs[currentPage].current.style.opacity = 1
          }, 1500)

          if (loadedAnimations[currentPage]) {
            setTimeout(() => {
              loadedAnimations[currentPage].play()
              loadedAnimations[currentPage].addEventListener('complete', () => {
                setAllowScroll(true)
              })

              setCurrentPage(currentPage + 1)
            }, 1750)
          } else {
            console.log('you reach end')
            navigate('/home')
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => window.removeEventListener('scroll', handleScroll)
  }, [windowHeight, currentPage, loadedAnimations, allowScroll])

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
          height: '130px',
          zIndex: 10,
          backgroundColor: showMenu ? 'white' : 'transparent',
          transition: 'background-color .5s ease-in-out',
          opacity: 0
        }}>
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Link to="/home">
              <img src={Logo} alt="logo" sx={{ width: '120px' }}/>
            </Link>

            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
          </Container>
        </header>

        <div ref={pageContainerRef} sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%'
        }}>
          <Box ref={animation1Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 7,
            backgroundColor: '#8bd4f7',
            opacity: 0,
            overflow: 'hidden',
            transition: 'opacity 1.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{ position: 'relative', width: '100%'}}>
              <Heading ref={heading1Ref} sx={{
                position: 'absolute',
                top: '180px',
                fontSize: '36px',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '2s',
                willChange: 'opacity'
              }}>
                To us, innovation means<br />building a brighter future<br />for us all.
                <svg ref={arrowRef} viewBox="0 0 12.7 12.7" sx={{
                  position: 'absolute',
                  top: '115px',
                  right: '150px',
                  width: '45px',
                  opacity: 0,
                  transition: 'all 1s ease-in-out',
                  transitionDelay: '4.25s',
                }}>
                  <path fill="#000" d="M5.644 2.117h1.412V7.76l2.116-2.117.706.706L6.35 9.878 2.822 6.35l.706-.706 2.116 2.117z" />
                </svg>
              </Heading>
            </Container>
          </Box>

          <Box ref={animation2Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 6,
            backgroundColor: '#b8d9ef',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 1.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{ position: 'relative', width: '100%'}}>
              <Heading ref={heading2Ref} sx={{
                position: 'absolute',
                top: '180px',
                fontSize: '36px',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '2s',
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
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 5,
            backgroundColor: '#000',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 1.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{ position: 'relative', width: '100%'}}>
              <Heading ref={heading3Ref} sx={{
                position: 'absolute',
                top: '180px',
                fontSize: '36px',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '2s',
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
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 4,
            backgroundColor: '#8bd4f7',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 1.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{ position: 'relative', width: '100%'}}>
              <Heading ref={heading4Ref} sx={{
                position: 'absolute',
                top: '180px',
                fontSize: '36px',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '2s',
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
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 3,
            backgroundColor: '#b8d9ef',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{ position: 'relative', width: '100%'}}>
              <Heading ref={heading5Ref} sx={{
                position: 'absolute',
                top: '180px',
                fontSize: '36px',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '2s',
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
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 2,
            backgroundColor: '#000',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out',
            willChange: 'opacity'
          }}>
            <Container sx={{ position: 'relative', width: '100%'}}>
              <Heading ref={heading6Ref} sx={{
                position: 'absolute',
                top: '180px',
                fontSize: '36px',
                fontFamily: 'serif',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '2s',
                willChange: 'opacity',
                color: 'white'
              }}>
                Empowering communities<br />to grow fresh food and<br />produce clean water.
              </Heading>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  )
}

