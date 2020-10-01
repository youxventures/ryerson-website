import React from 'react'
import MobileHomepage from '../components/MobileHomepage'
import DesktopHomepage from '../components/DesktopHomepage'

export default () => {
  if (typeof window === 'undefined') return
  window.innerWidth > 900 ? <DesktopHomepage /> : <MobileHomepage />
}