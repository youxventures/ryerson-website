/** @jsx jsx */
import { jsx, Container, Box, Heading } from 'theme-ui'
import React  from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PillarLinks from '../components/PillarLinks'

const Post = ({ pageContext }) => {
  const post = pageContext.post

  console.log(pageContext)

  return (
    <Layout>
      <Seo title={post.title} />

      <Container>
        <h1>{post.title}</h1>

        <div dangerouslySetInnerHTML={{__html: post.content}} />

        <Heading sx={{
          mt: 5,
          mb: 4,
          fontSize: '26px',
          fontWeight: 'bold',
        }}>
          Other areas of research and innovation
        </Heading>

        <PillarLinks pageId={true} />
      </Container>

      <Box>hey</Box>
    </Layout>
  )
}

export default Post