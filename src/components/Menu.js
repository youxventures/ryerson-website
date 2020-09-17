/** @jsx jsx */
import { jsx, Grid, Heading, Box } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Arrow from '../images/arrow.svg'
import Burger from './Burger'

export default ({ showMenu, setShowMenu }) => {
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
                order
              }
            }
          }
        }
      }
    `
  )

  let menuItems = wpgraphql.pages.nodes.sort((a, b) => (
    a.pageSettings.order - b.pageSettings.order
  ))

  return (
    <div>
      <Burger showMenu={showMenu} setShowMenu={setShowMenu} />

      {showMenu &&
        <Grid as="nav" role="navigation" columns={[1, 1, 2]} gap={0} sx={{
          position: 'absolute',
          top: ['96px', '96px', '140px'],
          left: 0,
          right: 0,
          width: '100%',
          height: ['calc(100% - 96px)', 'calc(100% - 96px)', 'calc(100% - 140px)'],
          zIndex: 10
        }}>
          {menuItems.map(({ id, slug, title, pageSettings: { color } }) => (
            <Link
              key={id}
              to={`/${slug}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
                px: 4,
                backgroundColor: color,
                color: 'black',
                textDecoration: 'none'
              }}
            >
              <Box sx={{
                width: ['15vw', '15vw', '10vw'],
                height: ['15vw', '15vw', '10vw'],
                mr: 3,
                backgroundColor: 'white',
                opacity: .5,
                borderRadius: '50%'
              }} />

              <Heading dangerouslySetInnerHTML={{__html: title}} sx={{
                width: ['55%', '50%', '60%'],
                fontSize: ['5vw', '5vw', '2.75vw'],
                fontFamily: 'serif',
                fontWeight: 'bold'
              }} />
              <img sx={{ width: ['6vw', '6vw', '4vw'] }} src={Arrow} alt="arrow"/>
            </Link>
          ))}
        </Grid>
      }
    </div>
  )
}
