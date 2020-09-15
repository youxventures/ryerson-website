/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PillarLinks from '../components/PillarLinks'

const Post = ({ pageContext }) => {
  const { wpgraphql } = useStaticQuery(
    graphql`
      query {
        wpgraphql {
          pages {
            nodes {
              id
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

  const post = pageContext.post

  let postCategory
  let postColor
  let pageId

  if (post.categories.nodes[0].name.replace(/ .*/,'') === 'Urban') {
    postCategory = post.categories.nodes[0].name.split(' ').slice(0,2).join(' ')
    postColor = wpgraphql.pages.nodes.filter(pillar =>
      pillar.title.split(' ').slice(0,2).join(' ') === postCategory
    )[0].pageSettings.color
    pageId = wpgraphql.pages.nodes.filter(pillar =>
      pillar.title.split(' ').slice(0,2).join(' ') === postCategory
    )[0].id
  } else {
    postCategory = post.categories.nodes[0].name.replace(/ .*/,'')
    postColor = wpgraphql.pages.nodes.filter(pillar =>
      pillar.title.replace(/ .*/,'') === postCategory
    )[0].pageSettings.color
    pageId = wpgraphql.pages.nodes.filter(pillar =>
      pillar.title.replace(/ .*/,'') === postCategory
    )[0].id
  }

  return (
    <Layout>
      <Seo title={post.title} />

      <Container>
        <h1>{post.title}</h1>

        <div dangerouslySetInnerHTML={{__html: post.content}} />
      </Container>

      <Box sx={{ mt: 4, backgroundColor: postColor }}>
        <Container>
          <Heading sx={{
            mt: 5,
            mb: 4,
            fontSize: '26px',
            fontWeight: 'bold',
          }}>
            Related articles
          </Heading>
          <Flex sx={{ my: 6, justifyContent: 'space-between', fontSize: '28px' }}>
            <Box>Previous Article</Box>
            <Box>Next Article</Box>
          </Flex>
        </Container>
      </Box>

      <Container>
        <Heading sx={{
          mt: 5,
          mb: 4,
          fontSize: '26px',
          fontWeight: 'bold',
        }}>
          Other areas of research and innovation
        </Heading>

        <PillarLinks pageId={pageId} />
      </Container>
    </Layout>
  )
}

export default Post