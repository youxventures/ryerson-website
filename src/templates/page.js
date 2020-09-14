/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default ({ pageContext }) => {
  const { page: { title, content, pageSettings: { articles, color } } } = pageContext

  return (
    <Layout>
      <Seo title={title} />

      <Flex sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Box sx={{ maxWidth: '50%' }}>
          <h1 dangerouslySetInnerHTML={{__html: title }} sx={{ m: 0 }} />
          <div dangerouslySetInnerHTML={{__html: content}} />

          <Flex sx={{ flexDirection: 'column' }}>
            {articles.map(article => (
              <Link key={article.id} to={`/blog/${article.slug}`} sx={{
                display: 'flex',
                mt: 4,
                color: 'black',
                textDecoration: 'none'
              }}>
                <Box sx={{
                  width: '75px',
                  height: '75px',
                  mr: 3,
                  backgroundColor: color,
                  borderRadius: '50%'
                }}/>
                <Box>
                  <h4 sx={{
                    m: 0,
                    maxWidth: '360px',
                    textDecoration: 'underline'
                  }}>
                    {article.title}
                  </h4>
                  <Box dangerouslySetInnerHTML={{__html: article.excerpt}} sx={{
                    fontSize: '14px',
                    'p': {
                      mt: 2
                    }
                  }}/>
                </Box>
              </Link>
            ))}
          </Flex>
        </Box>
        <Box>
          <div sx={{
            flex: 1,
            width: '600px',
            height: '460px',
            mt: 2,
            backgroundColor: color
          }}/>
        </Box>
      </Flex>
    </Layout>
  )
}
