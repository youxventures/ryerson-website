/** @jsx jsx */
import { jsx, Grid, Box, Heading, Text } from 'theme-ui'
import { useStaticQuery, graphql} from 'gatsby'
import Arrow from '../images/arrow.svg'
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
          <AniLink paintDrip to={`/${pillar.slug}`} hex={pillar.pageSettings.color} sx={{
            color: 'black'
          }}>
            <Box sx={{
              width: pageId ? '100px' : '200px',
              height: pageId ? '100px' : '200px',
              background: pillar.pageSettings.color,
              borderRadius: '50%'
            }} />
          </AniLink>

          <AniLink paintDrip to={`/${pillar.slug}`} hex={pillar.pageSettings.color} sx={{
            color: 'black'
          }}>
            <Heading dangerouslySetInnerHTML={{__html: pillar.title}} sx={{
              maxWidth: pageId ? ['none', 'none', '200px'] : '260px',
              mt: '25px',
              marginBottom: pageId ? 0 : 3,
              fontSize: pageId ? '22px' : '30px',
              fontFamily: 'serif',
              fontWeight: 'bold',
              textDecoration: 'underline'
            }} />
          </AniLink>

          <AniLink paintDrip to={`/${pillar.slug}`} hex={pillar.pageSettings.color} sx={{
            color: 'black',
            textDecoration: 'none'
          }}>
            <Text sx={{
              mt: pageId ? 3 : 0,
              mb: 3,
              fontSize: pageId ? '16px' : '20px'
            }}>
              {pillar.pageSettings.linkText}
            </Text>
          </AniLink>

          <AniLink paintDrip to={`/${pillar.slug}`} hex={pillar.pageSettings.color}>
            <Box sx={{
              width: pageId ? '35px' : '50px',
              mt: 'auto'
            }}>
              <img src={Arrow} alt="arrow" />
            </Box>
          </AniLink>
        </Box>
      )}
    </Grid>
  )
}