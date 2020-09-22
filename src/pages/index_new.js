/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

export default () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const [currentPage, setCurrentPage] = useState(0)
  const pageContainer = useRef(null)

  useEffect(() => {
    document.body.style.height = `${window.innerHeight * 6}px`
  }, [])

  useEffect(() => {
    if (windowHeight) document.body.style.height = windowHeight
  }, [windowHeight])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY
      const pages = pageContainer.current.childNodes

      const centerPage = pages.item(currentPage)
      const nextPage = pages.item(currentPage + 1)
      const prevPage = pages.item(currentPage - 1)

      let pageScroll

      centerPage.style.top = 0
      nextPage.style.top = 0

      if (prevPage) {
        prevPage.style.top = `${-windowHeight}px`
        prevPage.style.transform = null
      }

      if (totalScroll < windowHeight) {
        pageScroll = totalScroll
      }

      if (totalScroll >= windowHeight && totalScroll < windowHeight * 2) {
        console.log('two')
        setCurrentPage(1)
        pageScroll = totalScroll - windowHeight
      }

      if (totalScroll >= windowHeight * 2 && totalScroll < windowHeight * 3) {
        console.log('three')
        setCurrentPage(2)
        pageScroll = totalScroll - windowHeight * 2
      }

      if (totalScroll >= windowHeight * 3 && totalScroll < windowHeight * 4) {
        console.log('four')
        setCurrentPage(3)
        pageScroll = totalScroll - windowHeight * 3
      }

      // else if (totalScroll >= windowHeight * 3) {
      //   console.log('four')
      //   setCurrentPage(3)
      //   pageScroll = totalScroll - windowHeight * 3
      // } else if (totalScroll >= windowHeight * 4) {
      //   setCurrentPage(4)
      //   pageScroll = totalScroll - windowHeight * 4
      // } else if (totalScroll >= windowHeight * 5) {
      //   setCurrentPage(5)
      //   pageScroll = totalScroll - windowHeight * 5
      // }

      if (centerPage) centerPage.style.transform = `translateY(-${pageScroll}px)`
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
        background: '#000',
        zIndex: '1'
      }}>
        <div ref={pageContainer} sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: windowWidth
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem',
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 4,
            backgroundColor: 'cadetblue',
            overflow: 'hidden'
          }}>
            one
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem',
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 3,
            backgroundColor: 'grey',
            overflow: 'hidden'
          }}>
            two
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem',
            fontSize: '48px',
            position: 'absolute',
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 2,
            backgroundColor: 'tomato',
            overflow: 'hidden'
          }}>
            three
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem',
            fontSize: '48px',
            position: 'absolute',
            top: windowHeight,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 2,
            backgroundColor: 'tomato',
            overflow: 'hidden'
          }}>
            four
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem',
            fontSize: '48px',
            position: 'absolute',
            top: windowHeight,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 2,
            backgroundColor: 'tomato',
            overflow: 'hidden'
          }}>
            five
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem',
            fontSize: '48px',
            position: 'absolute',
            top: windowHeight,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 2,
            backgroundColor: 'tomato',
            overflow: 'hidden'
          }}>
            six
          </Box>
        </div>
      </div>
    </div>
  )
}

