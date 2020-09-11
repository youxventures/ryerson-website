/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Burger from './Burger'

export default () => {
  const { wpgraphql } = useStaticQuery(
    graphql`
      query {
        wpgraphql {
          pages {
            nodes {
              id
              slug
              title
              pageSettings {
                color
              }
            }
          }
        }
      }
    `
  )

  const menuItems = wpgraphql.pages.nodes
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <Burger showMenu={showMenu} setShowMenu={setShowMenu} />

      {showMenu &&
        <nav role="navigation" sx={{
          position: 'absolute',
          top: 5,
          left: 0,
          right: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '100%'
        }}>
          {menuItems.map(({ id, slug, title, pageSettings: { color } }) => (
            <Link
              key={id}
              to={`/${slug}`}
              dangerouslySetInnerHTML={{__html: title}}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
                backgroundColor: color,
                color: 'black'
              }}
            />
          ))}
        </nav>
      }
    </div>
  )
}
