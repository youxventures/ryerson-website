/** @jsx jsx */
import { jsx, Grid, Box, Heading, Text } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Arrow from '../images/arrow.svg'
import gsap from 'gsap'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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

  // verticalAnimation = ({ length }, direction) => {
  //   const directionTo = direction === 'up' ? '-100%' : '100%'
  //   const directionFrom = direction === 'up' ? '100%' : '-100%'

  //   // convert ms to s for gsap
  //   const seconds = length

  //   return gsap.timeline()
  //     .set(this.transitionCover, { y: directionFrom })
  //     .to(this.transitionCover, {
  //       y: '0%',
  //       ease: "power1.easeInOut",
  //       duration: seconds / 2,
  //     })
  //     .set(this.layoutContents, { opacity: 0 })
  //     .to(this.transitionCover, {
  //       y: directionTo,
  //       ease: "power1.easeIn",
  //       duration: seconds / 2,
  //     })
  // }

  return (
    <Grid columns={pageId ? [1, 5] : [1, 2, 3]} gap={pageId ? 4 : 6} sx={{ gridRowGap: 5 }}>
      {pillars.map(pillar =>
        <Box key={pillar.id} sx={{
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          color: 'primary',
          textAlign: ['center', 'left'],
          alignItems: ['center', 'flex-start']
        }}>
          <AniLink to={`/${pillar.slug}`} paintDrip hex={pillar.pageSettings.color}>
            <Box sx={{
              width: pageId ? '100px' : '200px',
              height: pageId ? '100px' : '200px',
              background: pillar.pageSettings.color,
              borderRadius: '50%'
            }} />
          </AniLink>

          <Heading dangerouslySetInnerHTML={{__html: pillar.title}} sx={{
            maxWidth: pageId ? ['none', 'none', '200px'] : '260px',
            mt: '25px',
            marginBottom: pageId ? 0 : 3,
            fontSize: pageId ? '22px' : '30px',
            fontFamily: 'serif',
            fontWeight: 'bold',
            textDecoration: 'underline'
          }} />

          <Text sx={{
            mt: pageId ? 3 : 0,
            mb: 3,
            fontSize: pageId ? '16px' : '20px'
          }}>
            {pillar.pageSettings.linkText}
          </Text>

          <Box sx={{
            width: pageId ? '35px' : '50px',
            mt: 'auto'
          }}>
            <img src={Arrow} alt="arrow" />
          </Box>
        </Box>
      )}
    </Grid>
  )
}