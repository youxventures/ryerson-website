/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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

      if (prevPage) {
        prevPage.style.top = `${-windowHeight}px`
        prevPage.style.transform = null
      }

      if (nextPage) {
        nextPage.style.transform = null
        nextPage.style.top = 0
        centerPage.style.top = 0
      }

      const currentPageNumber = totalScroll < windowHeight ? 0
        : totalScroll > windowHeight && totalScroll < windowHeight * 2 ? 1
        : totalScroll > windowHeight * 2 && totalScroll < windowHeight * 3 ? 2
        : totalScroll > windowHeight * 3 && totalScroll < windowHeight * 4 ? 3
        : totalScroll > windowHeight * 4 && totalScroll < windowHeight * 5 ? 4
        : totalScroll > windowHeight * 5 && totalScroll < windowHeight * 6 ? 5
        : 5

      const transform =
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
      centerPage.style.transform = transform
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
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 7,
            backgroundColor: '#9e67be',
            overflow: 'hidden'
          }}>
            one
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 6,
            backgroundColor: '#cc8bf8',
            overflow: 'hidden'
          }}>
            two
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 5,
            backgroundColor: '#db9ef8',
            overflow: 'hidden'
          }}>
            three
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 4,
            backgroundColor: '#e9aef8',
            overflow: 'hidden'
          }}>
            four
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 3,
            backgroundColor: '#f6bdf7',
            overflow: 'hidden'
          }}>
            five
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            fontSize: '48px',
            position: 'absolute',
            top: 0,
            left: 0,
            width: windowWidth,
            height: '100%',
            zIndex: 2,
            backgroundColor: '#f7caf8',
            overflow: 'hidden'
          }}>
            <AniLink to="/home" paintDrip hex="#fff" sx={{
              color: 'black'
            }}>
              Enter
            </AniLink>
          </Box>
        </div>
      </div>
    </div>
  )
}

