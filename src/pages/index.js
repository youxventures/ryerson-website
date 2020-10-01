import React from 'react'
import MobileHomepage from '../components/MobileHomepage'
import DesktopHomepage from '../components/DesktopHomepage'

export default () => window.innerWidth > 900 ? <DesktopHomepage /> : <MobileHomepage />