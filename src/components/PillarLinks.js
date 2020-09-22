/** @jsx jsx */
import { useEffect, useRef } from 'react'
import { jsx, Grid, Box, Heading, Text } from 'theme-ui'
import { useStaticQuery, graphql, Link} from 'gatsby'
import Arrow from '../images/arrow.svg'
import lottie from 'lottie-web'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'

import udiAnim from '../animations/icon_migration.json'
import uhwAnim from '../animations/icon_gov.json'
import govAnim from '../animations/icon_uhw.json'
import economicAnim from '../animations/icon_uhw.json'
import creativityAnim from '../animations/icon_gov.json'
import migrationAnim from '../animations/icon_migration.json'

export default ({ pageId }) => {
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
                linkText
                order
                pageId
              }
            }
          }
        }
      }
    `
  )

  let pillars = pageId
    ? wpgraphql.pages.nodes.filter(pillar => pillar.id !== pageId)
    : wpgraphql.pages.nodes

  pillars = pillars.sort((a, b) => (
    a.pageSettings.order - b.pageSettings.order
  ))

  const udiRef = useRef()
  const uhwRef = useRef()
  const govRef = useRef()
  const economicRef = useRef()
  const creativityRef = useRef()
  const migrationRef = useRef()

  const refs = [udiRef, uhwRef, govRef, economicRef, creativityRef, migrationRef]
  const animationData = [udiAnim, uhwAnim, govAnim, economicAnim, creativityAnim, migrationAnim]

  useEffect(() => {
    refs.forEach((ref, i) => {
      let animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        animationData: animationData[i],
      })
    })
  }, [])

  return (
    <Grid columns={pageId ? [1, 5] : [1, 2, 3]} gap={pageId ? 4 : 6} sx={{ gridRowGap: 5 }}>
      {pillars.map((pillar, i) =>
        <Link to={`/${pillar.slug}`} key={pillar.id} sx={{
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          color: 'primary',
          textAlign: ['center', 'left'],
          alignItems: ['center', 'flex-start']
        }}>
          {/* <AniLink paintDrip hex={pillar.pageSettings.color} sx={{
            color: 'black'
          }}> */}

            <Box ref={refs[i]} sx={{
              width: pageId ? '100px' : '200px',
              height: pageId ? '100px' : '200px'
            }}/>

          {/* </AniLink> */}

          {/* <AniLink paintDrip to={`/${pillar.slug}`} hex={pillar.pageSettings.color} sx={{
            color: 'black'
          }}> */}
            <Heading dangerouslySetInnerHTML={{__html: pillar.title}} sx={{
              maxWidth: pageId ? ['none', 'none', '200px'] : '260px',
              mt: '25px',
              marginBottom: pageId ? 0 : 3,
              fontSize: pageId ? '22px' : '30px',
              fontFamily: 'serif',
              fontWeight: 'bold',
              textDecoration: 'underline'
            }} />
          {/* </AniLink> */}

          {/* <AniLink paintDrip to={`/${pillar.slug}`} hex={pillar.pageSettings.color} sx={{
            color: 'black',
            textDecoration: 'none'
          }}> */}
            <Text sx={{
              mt: pageId ? 3 : 0,
              mb: 3,
              fontSize: pageId ? '16px' : '20px'
            }}>
              {pillar.pageSettings.linkText}
            </Text>
          {/* </AniLink> */}

          {/* <AniLink paintDrip to={`/${pillar.slug}`} hex={pillar.pageSettings.color}> */}
            <Box sx={{
              width: pageId ? '35px' : '50px',
              mt: 'auto'
            }}>
              <img src={Arrow} alt="arrow" />
            </Box>
          {/* </AniLink> */}
        </Link>
      )}
    </Grid>
  )
}