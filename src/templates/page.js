/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading, Text } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PillarLinks from '../components/PillarLinks'
import Arrow from '../images/arrow.svg'

export default ({ pageContext }) => {
  const { page: { id, title, content, pageSettings: { articles, color } } } = pageContext

  return (
    <Layout bgColor={color}>
      <Seo title={title} />

      <Box sx={{ pb: 5, backgroundColor: color }}>
        <Container>
          <Flex sx={{
            position: 'relative',
            width: '100%',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'space-between'
          }}>
            <Box sx={{ maxWidth: ['none', 'none', '50%'] }}>
              <Heading dangerouslySetInnerHTML={{__html: title }} sx={{
                m: 0,
                fontSize: '36px',
                fontWeight: 'bold'
              }}/>

              <Text dangerouslySetInnerHTML={{__html: content}} sx={{
                maxWidth: '500px'
              }}/>

              <Box>
                <div sx={{
                  display: ['block', 'block', 'none'],
                  flex: 1,
                  width: '100%',
                  height: '200px',
                  mt: 2,
                  backgroundColor: 'white',
                  opacity: .5
                }}/>
              </Box>

              <Flex sx={{ flexDirection: 'column' }}>
                {articles.map(article => (
                  <Link key={article.id} to={`/blog/${article.slug}`} sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row'],
                    alignItems: ['center', 'center', 'flex-start'],
                    textAlign: ['center', 'center', 'left'],
                    mt: 4,
                    color: 'black',
                    textDecoration: 'none'
                  }}>
                    <Box sx={{
                      width: '80px',
                      height: '80px',
                      mr: [0, 0, 3],
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      opacity: .5
                    }} />

                    <Box sx={{ maxWidth: '425px', mt: [3, 3, 0] }}>
                      <Heading sx={{
                        m: 0,
                        fontSize: ['22px', '20px'],
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                      }}>
                        {article.title}
                      </Heading>

                      <Box dangerouslySetInnerHTML={{__html: article.excerpt}} sx={{
                        fontSize: ['16px', '15px'],
                        'p': {
                          mt: [3, 2],
                          mb: 3
                        }
                      }} />
                    </Box>

                    <Box sx={{
                      display: ['block', 'block', 'none'],
                      width: '35px'
                    }}>
                      <img src={Arrow} alt="arrow" />
                    </Box>
                  </Link>
                ))}
              </Flex>
            </Box>

            <Box>
              <div sx={{
                display: ['none', 'none', 'block'],
                flex: 1,
                width: '600px',
                height: '460px',
                mt: 2,
                backgroundColor: 'white',
                opacity: .5
              }}/>
            </Box>
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

        <PillarLinks pageId={id} />
      </Container>
    </Layout>
  )
}
