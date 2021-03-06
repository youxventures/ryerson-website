/** @jsx jsx */
import { useEffect, useRef } from 'react'
import { jsx, Grid, Box, Heading, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import lottie from 'lottie-web'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import udiAnim from '../animations/icon_udi.json'
import uhwAnim from '../animations/icon_uhw.json'
import govAnim from '../animations/icon_gov.json'
import economicAnim from '../animations/icon_economic.json'
import creativityAnim from '../animations/icon_creativity.json'
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

  const udiPillarRef = useRef()
  const uhwPillarRef = useRef()
  const govPillarRef = useRef()
  const economicPillarRef = useRef()
  const creativityPillarRef = useRef()
  const migrationPillarRef = useRef()

  const refs = [
    udiRef,
    uhwRef,
    govRef,
    economicRef,
    creativityRef,
    migrationRef
  ]

  const animationData = [
    udiAnim,
    uhwAnim,
    govAnim,
    economicAnim,
    creativityAnim,
    migrationAnim
  ]

  const hoverContainerRefs = [
    udiPillarRef,
    uhwPillarRef,
    govPillarRef,
    economicPillarRef,
    creativityPillarRef,
    migrationPillarRef
  ]

  let animationRefs = []
  let animationDataSorted = []
  let hoverRefsSorted = []

  pillars.forEach(pillar => {
    animationRefs.push(refs[pillar.pageSettings.pageId - 1])
    animationDataSorted.push(animationData[pillar.pageSettings.pageId - 1])
    hoverRefsSorted.push(hoverContainerRefs[pillar.pageSettings.pageId - 1])
  })

  useEffect(() => {
    let animations = []

    animationRefs.forEach((ref, i) => {
      const anim = lottie.loadAnimation({
        container: ref.current,
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        animationData: animationDataSorted[i],
      })

      animations.push(anim)
    })

    hoverRefsSorted.forEach((pillar, i) => {
      if (pillar.current) {
        pillar.current.addEventListener('mouseenter', () => {
          animations[i].setDirection(1)
          animations[i].play()
        })

        pillar.current.addEventListener('mouseleave', () => {
          animations[i].setDirection(-1)
          animations[i].play()
        })
      }
    })

    return () => {
      hoverRefsSorted.forEach((pillar, i) => {
        if (pillar.current) {
          pillar.current.removeEventListener('mouseenter', () => {
            animations[i].setDirection(1)
            animations[i].play()
          })

          pillar.current.removeEventListener('mouseleave', () => {
            animations[i].setDirection(-1)
            animations[i].play()
          })
        }
      })
    }
  }, [])

  return (
    <Grid
      columns={pageId ? [1, 1, 5] : [1, 2, 3]}
      gap={pageId ? 4 : 6}
      sx={{ gridRowGap: 5 }}
    >
      {pillars.map((pillar, i) =>
        <Box ref={hoverRefsSorted[i]} key={pillar.id} sx={{
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          color: 'primary',
          textAlign: ['center', 'center', 'left'],
          alignItems: ['center', 'center', 'flex-start'],
          'svg g path': {
            transition: 'fill .35s ease-in-out'
          },
          '&:hover': {
            'a': {
              textDecoration: 'none'
            },
            'a h2': {
              textDecoration: 'none'
            },
            'svg g': {
              fill: 'black'
            },
            'svg g path:nth-of-type(2)': {
              fill: 'white'
            }
          }
        }}>
          <AniLink
            paintDrip to={`/${pillar.slug}`}
            hex={pillar.pageSettings.color}
            sx={{
              position: 'relative',
              color: 'black'
            }}
            duration={1.5}
          >
            <Box ref={animationRefs[i]} sx={{
              width: pageId ? '175.5px' : '200px',
              height: pageId ? '175.5px' : '200px'
            }}/>
          </AniLink>

          <AniLink
            paintDrip to={`/${pillar.slug}`}
            hex={pillar.pageSettings.color}
            sx={{ color: 'black', transition: 'text-decoration .2s ease-in-out' }}
            duration={1.5}
          >
            <Heading dangerouslySetInnerHTML={{__html: pillar.title}} sx={{
              maxWidth: pageId ? ['none', 'none', '200px'] : '260px',
              mt: 3,
              marginBottom: pageId ? 0 : 3,
              fontSize: pageId ? ['20px', '20px', '18px', '22px'] : '30px',
              fontFamily: 'serif',
              fontWeight: 'bold',
              textDecoration: 'underline',
              transition: 'text-decoration .2s ease-in-out',
              fontFeatureSettings: '"liga" 1'
            }} />
          </AniLink>

          <AniLink
            paintDrip to={`/${pillar.slug}`}
            hex={pillar.pageSettings.color}
            sx={{ color: 'black', textDecoration: 'none' }}
            duration={1.5}
          >
            <Text sx={{
              maxWidth: '400px',
              mt: pageId ? 3 : 0,
              mb: 3,
              fontSize: pageId ? ['17px', '17px', '16px'] : '20px'
            }}>
              {pillar.pageSettings.linkText}
            </Text>
          </AniLink>

          <AniLink
            paintDrip to={`/${pillar.slug}`}
            hex={pillar.pageSettings.color}
            sx={{ mt: 'auto' }}
            duration={1.5}
          >
            <Box sx={{
              width: pageId ? '35px' : '50px',
            }}>
              <svg viewBox="0 0 54 54"><g fill="none" fillRule="evenodd"><path d="M27.209 50.783c13.035 0 23.602-10.566 23.602-23.602 0-13.034-10.567-23.6-23.602-23.6S3.607 14.146 3.607 27.18c0 13.036 10.567 23.602 23.602 23.602z" stroke="#000" strokeWidth="4.782"/><path fill="#000" d="M26.852 18.255l-.357.357v.357l6.07 6.07v.357H15.069l-.357.357v2.856l.357.357h17.496v.358l-6.07 6.07v.356l.357.358h3.928l.714-.358 8.212-8.212v-.714l-8.212-8.212-.714-.357z"/></g></svg>
            </Box>
          </AniLink>
        </Box>
      )}
    </Grid>
  )
}