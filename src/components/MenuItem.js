import { CreateLocalLink } from '../utils'
import UniversalLink from './UniversalLink'

export default ({ menuItem, wordPressUrl }) => (
  <UniversalLink to={CreateLocalLink(menuItem, wordPressUrl)}>
    {menuItem.label}
  </UniversalLink>
)

export default MenuItem
