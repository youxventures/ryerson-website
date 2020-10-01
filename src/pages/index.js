import React from 'react'
import { isMobile } from 'react-device-detect'
import MobileHomepage from '../components/MobileHomepage'
import DesktopHomepage from '../components/DesktopHomepage'

export default () => {
  if (isMobile) {
    return <MobileHomepage />
  } else {
    return <DesktopHomepage />
  }
}
