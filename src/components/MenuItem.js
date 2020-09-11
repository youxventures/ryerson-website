import React from 'react'
import { CreateLocalLink } from '../utils'
import UniversalLink from './UniversalLink'

export default ({ menuItem, wordPressUrl }) => (
  <UniversalLink
    to={CreateLocalLink(menuItem, wordPressUrl)}
    dangerouslySetInnerHTML={{__html: menuItem.label}}
  />
)
