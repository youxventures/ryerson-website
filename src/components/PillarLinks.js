/** @jsx jsx */
import { jsx, Grid, Box, Heading, Text } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Arrow from '../images/arrow.svg'

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

  return (
    <Grid columns={pageId ? 5 : 3} gap={pageId ? 4 : 6} sx={{ gridRowGap: 5 }}>
      {pillars.map(pillar => {
        return (
          <Link key={pillar.id} to={`/${pillar.slug}`} sx={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: 'primary'
          }}>
            <div sx={{
              width: pageId ? '80px' : '120px',
              height: pageId ? '80px' : '120px',
              background: pillar.pageSettings.color,
              borderRadius: '50%'
            }} />

            <Heading dangerouslySetInnerHTML={{__html: pillar.title}} sx={{
              maxWidth: pageId ? '170px' : '240px',
              marginTop: '20px',
              marginBottom: pageId ? '10px' : '25px',
              fontSize: pageId ? '20px' : '26px',
              fontFamily: 'serif',
              fontWeight: 'bold',
              textDecoration: 'underline'
            }} />

            <Text sx={{ mb: pageId ? 2 : 3, fontSize: pageId ? '15px' : '20px' }}>
              {pillar.pageSettings.linkText}
            </Text>

            <Box sx={{
              width: pageId ? '35px' : '50px',
              mt: 'auto'
            }}>
              <img src={Arrow} alt="arrow" />
            </Box>
          </Link>
        )
      })}
    </Grid>
  )
}