/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import MenuItem from './MenuItem'

export default () => {
  const { wpgraphql } = useStaticQuery(
    graphql`
      query {
        wpgraphql {
          generalSettings {
            url
          }
          menuItems(where: {location: PRIMARY}) {
            nodes {
              id
              url
              label
            }
          }
        }
      }
    `
  )

  const menuItems = wpgraphql.menuItems.nodes
  const wordPressUrl = wpgraphql.generalSettings.url

  return (
    <nav role="navigation" sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
      ))}
    </nav>
  )
}
