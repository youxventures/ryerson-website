/** @jsx jsx */
import { jsx, Grid, Heading, Box } from 'theme-ui'
import { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Arrow from '../images/arrow.svg'
import Burger from './Burger'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default ({ showMenu, setShowMenu, homePage, absoluteHeader }) => {
  const menuRef = useRef(null)
  const {
    wpgraphql,
    menuUdi,
    menuUhw,
    menuGov,
    menuEconomic,
    menuCreativity,
    menuMigration
  } = useStaticQuery(
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
                pageId
              }
            }
          }
        },
        menuUdi: file(relativePath: { eq: "menu-udi.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        menuUhw: file(relativePath: { eq: "menu-uhw.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        menuGov: file(relativePath: { eq: "menu-gov.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        menuEconomic: file(relativePath: { eq: "menu-economic.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        menuCreativity: file(relativePath: { eq: "menu-creativity.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        menuMigration: file(relativePath: { eq: "menu-migration.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  let menuItems = wpgraphql.pages.nodes.sort((a, b) => (
    a.pageSettings.order - b.pageSettings.order
  ))

  let menuItemIcons = [menuUdi, menuUhw, menuGov, menuEconomic, menuCreativity, menuMigration]

  useEffect(() => {
    if (!homePage) {
      const body = document.querySelector('body')
      const documentWidth = document.documentElement.clientWidth
      const windowWidth = window.innerWidth
      const scrollBarWidth = windowWidth - documentWidth

      body.style.paddingRight = showMenu ? `${scrollBarWidth}px` : 0
      body.style.overflow = showMenu ? 'hidden' : 'auto'
    }

    menuRef.current.style.visibility = showMenu ? 'visible' : 'hidden'
    menuRef.current.style.opacity = showMenu ? 1 : 0
  }, [showMenu, homePage])

  return (
    <div sx={{ zIndex: 11 }}>
      <Burger showMenu={showMenu} setShowMenu={setShowMenu} />

      <Grid
        as="nav"
        role="navigation"
        ref={menuRef}
        columns={[1, 2, 2]}
        gap={0}
        sx={{
          position: 'absolute',
          top: ['96px', '96px', '130px'],
          left: 0,
          right: 0,
          width: '100%',
          height: ['calc(100vh - 96px)', 'calc(100vh - 96px)', 'calc(100vh - 130px)'],
          zIndex: 10,
          background: 'white',
          opacity: 0,
          visibility: 'hidden',
          transition: 'visibility .5s ease-in-out, opacity .5s ease-in-out',
          '::before': !absoluteHeader ? null : {
            content: '""',
            position: 'absolute',
            top: '-130px',
            width: '100%',
            height: '130px',
            backgroundColor: 'white',
            pointerEvents: 'none',
            zIndex: 10
          }
        }}
      >
        {menuItems.map(({ id, slug, title, pageSettings: { color, pageId } }, i) => {
          const hoverColor = pageId === 1 ? '#74cbf6'
            : pageId === 2 ? '#bfbe00'
            : pageId === 3 ? '#f799c7'
            : pageId === 4 ? '#ffba07'
            : pageId === 5 ? '#8989ca'
            : '#00a3ad'

          return (
            <AniLink
              paintDrip to={`/${slug}`}
              hex={color}
              duration={1.5}
              key={id}
              sx={{
                color: 'black',
                textDecoration: 'none',
                '&:hover': {
                  '> div': {
                    backgroundColor: hoverColor
                  }
                }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '100%',
                  px: ['32px', '36px', '40px'],
                  backgroundColor: color,
                  transition: 'background-color .15s ease-in-out',
                  color: 'black',
                  textDecoration: 'none'
                }}
              >
                <Img fluid={menuItemIcons[i].childImageSharp.fluid} sx={{
                  width: ['17.5vw', '10vw', '10vw'],
                  height: ['17.5vw', '10vw', '10vw'],
                  mr: 0
                }} />

                <Heading dangerouslySetInnerHTML={{__html: title}} sx={{
                  width: ['56%', '50%', '56%'],
                  fontSize: ['6vw', '3vw', '3.15vw'],
                  lineHeight: 1.05,
                  fontFamily: 'serif',
                  fontWeight: 'bold'
                }} />

                <img src={Arrow} alt="arrow" sx={{
                  width: ['6vw', '6vw', '4vw'],
                  pointerEvents: 'none'
                }}/>
              </Box>
            </AniLink>
          )
        })}
      </Grid>
    </div>
  )
}
