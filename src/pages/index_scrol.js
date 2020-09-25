// /** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import PillarLinks from '../components/PillarLinks'
import Footer from '../components/Footer'
import lottie from 'lottie-web'

import homeAnimation1 from '../animations/homepage1.json'
import homeAnimation2 from '../animations/homepage2.json'
import homeAnimation3 from '../animations/homepage1.json'
import homeAnimation4 from '../animations/homepage2.json'
import homeAnimation5 from '../animations/homepage1.json'
import homeAnimation6 from '../animations/homepage2.json'

export default () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const [currentPage, setCurrentPage] = useState(0)
  const pageContainer = useRef(null)

  const animation1Ref = useRef()
  const animation2Ref = useRef()
  const animation3Ref = useRef()
  const animation4Ref = useRef()
  const animation5Ref = useRef()
  const animation6Ref = useRef()

  const refs = [
    animation2Ref,
    animation3Ref,
    animation4Ref,
    animation5Ref,
    animation6Ref
  ]

  const animationData = [
    homeAnimation2,
    homeAnimation3,
    homeAnimation4,
    homeAnimation5,
    homeAnimation6
  ]

  let animations = []

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.style.height = `${window.innerHeight * 7}px`
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (windowHeight) document.body.style.height = windowHeight
  }, [windowHeight])

  const loadAnimations = () => {
    refs.forEach((ref, i) => {
      let animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'canvas',
        autoplay: false,
        loop: false,
        animationData: animationData[i]
      })
    })
  }

  useEffect(() => {
    setTimeout(() => {
      const anim = lottie.loadAnimation({
        container: animation1Ref.current,
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        animationData: homeAnimation1,
      })

      anim.addEventListener('DOMLoaded', () => {
        animation1Ref.current.style.opacity = 1

        loadAnimations()
      })
    }, 1500)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      const totalScroll = window.scrollY
      const pages = pageContainer.current.childNodes

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

      const currentPageNumber = totalScroll < windowHeight ? 0
        : totalScroll > windowHeight && totalScroll < windowHeight * 2 ? 1
        : totalScroll > windowHeight * 2 && totalScroll < windowHeight * 3 ? 2
        : totalScroll > windowHeight * 3 && totalScroll < windowHeight * 4 ? 3
        : totalScroll > windowHeight * 4 && totalScroll < windowHeight * 5 ? 4
        : totalScroll > windowHeight * 5 && totalScroll < windowHeight * 6 ? 5
        : 5

      const translateY =
        currentPage === 0 && totalScroll < windowHeight
        ? `translateY(-${totalScroll}px)`
        : currentPage === 1 && totalScroll > windowHeight && totalScroll < windowHeight * 2
        ? `translateY(-${totalScroll - windowHeight}px)`
        : currentPage === 2 && totalScroll > windowHeight && totalScroll < windowHeight * 3
        ? `translateY(-${totalScroll - windowHeight * 2}px)`
        : currentPage === 3 && totalScroll > windowHeight && totalScroll < windowHeight * 4
        ? `translateY(-${totalScroll - windowHeight * 3}px)`
        : currentPage === 4 && totalScroll > windowHeight && totalScroll < windowHeight * 5
        ? `translateY(-${totalScroll - windowHeight * 4}px)`
        : currentPage === 5 && totalScroll > windowHeight && totalScroll < windowHeight * 6
        ? `translateY(-${totalScroll - windowHeight * 5}px)`
        : `translateY(-${totalScroll - windowHeight * 6}px)`

      setCurrentPage(currentPageNumber)
      centerPage.style.transform = translateY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [windowHeight, currentPage])

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
        <div ref={pageContainer} sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: windowWidth
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
            transition: 'opacity 1.5s ease-in-out'
          }} />

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
            transition: 'opacity 2.5s ease-in-out'
          }} />

          <Box ref={animation3Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 5,
            backgroundColor: '#8bd4f7',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out'
          }} />

          <Box ref={animation4Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 4,
            backgroundColor: '#b8d9ef',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out'
          }} />

          <Box ref={animation5Ref} sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 3,
            backgroundColor: '#8bd4f7',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out'
          }} />

          <Box ref={animation6Ref} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 2,
            backgroundColor: '#b8d9ef',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out'
          }}>
            <PillarLinks />
          </Box>

          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2560px',
            height: '1600px',
            maxWidth: '100%',
            maxHeight: '100%',
            zIndex: 2,
            backgroundColor: 'white',
            overflow: 'hidden',
            opacity: 0,
            transition: 'opacity 2.5s ease-in-out'
          }}>
            <Container>
              <PillarLinks />
            </Container>
          </Box>
        </div>
      </div>
    </div>
  )
}
