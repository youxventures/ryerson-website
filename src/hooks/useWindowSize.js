import { useEffect, useState } from 'react'

export default () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize);

    handleResize()

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowSize
}