/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from 'theme-ui'
import { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PillarLinks from '../components/PillarLinks'
import '../styles/article.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
          posts(first: 30) {
            nodes {
              id
              title
              excerpt
              slug
              uri
              featuredImage {
                sourceUrl
              }
              postSettings {
                iconBackgroundColor
                iconHoverColor
                linkText
                linkImage {
                  sourceUrl
                }
              }
              categories {
                nodes {
                  name
                }
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

  // had to hack this together to be able to get the correct color
  // for the related articles section background
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

  const relatedArticles = () => {
    const posts = wpgraphql.posts.nodes
    const categoryPosts = posts
      .filter(post => post.categories.nodes[0].name.includes(postCategory))
      .filter(categoryPost => categoryPost.id !== post.id)
      .slice(0, 2)

    return categoryPosts
  }

  const isInViewport = element => {
    const bounding = element.getBoundingClientRect()

    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const blockQuotes = document.querySelectorAll('blockquote')

    if (blockQuotes) {
      blockQuotes.forEach(quote => {
        quote.style.opacity = 0
        quote.style.transition = 'opacity 1.75s ease-in-out .25s'
      })

      const handleScroll = () => {
        blockQuotes.forEach(quote => {
          if (isInViewport(quote)) quote.style.opacity = 1
        })
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout absoluteHeader>
      <SEO
        title={post.title}
        slug={post.uri}
        description={post.postSettings.linkText}
        image={post.postSettings.linkImage && post.postSettings.linkImage.sourceUrl}
        isBlogPost
      />

      <Container sx={{ px: '1.5rem', marginTop: '-130px' }}>
        <div dangerouslySetInnerHTML={{__html: post.content}} />
      </Container>

      {relatedArticles().length > 0 &&
        <Box sx={{ mt: 5, backgroundColor: postColor }}>
          <Container sx={{ py: 2 }}>
            <Heading sx={{
              mt: 5,
              mb: 3,
              fontSize: ['24px', '28px'],
              fontWeight: 'bold',
            }}>
              Related articles
            </Heading>

            <Flex sx={{ mb: 5, justifyContent: 'space-between', flexDirection: ['column', 'row', 'row'] }}>
              {relatedArticles().map(article => {
                return (
                  <AniLink
                    key={article.id}
                    paintDrip to={article.uri}
                    hex="#fff"
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: ['column', 'column', 'row'],
                      alignItems: 'center',
                      textAlign: ['center', 'center', 'left'],
                      mt: 4,
                      color: 'black',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        'h2': {
                          textDecoration: 'none'
                        },
                        '.article-icon': {
                          'backgroundColor': article.postSettings.iconHoverColor
                        }
                      }
                    }}
                  >
                    <Box className="article-icon" sx={{
                      position: 'relative',
                      width: '100%',
                      height: '150px',
                      maxWidth: '150px',
                      mr: [0, 0, 4],
                      backgroundColor: article.postSettings.iconBackgroundColor,
                      transition: 'background-color .2s ease-in-out',
                      borderRadius: '50%',
                    }}>
                      {article.featuredImage &&
                        <img src={article.featuredImage.sourceUrl} alt="article" />
                      }
                    </Box>

                    <Box sx={{ mt: [3, 3, 0], mr: [0, 3, '24px'], ml: [0, 3, 0] }}>
                      <Heading sx={{
                        maxWidth: '760px',
                        m: 0,
                        fontSize: '22px',
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        fontFeatureSettings: '"liga" 1'
                      }}>
                        {article.title}
                      </Heading>

                      <Box dangerouslySetInnerHTML={{__html: article.excerpt}} sx={{
                        fontSize: '16px',
                        'p': {
                          mt: [3, 2],
                          mb: 3
                        }
                      }} />
                    </Box>
                  </AniLink>
                )
              }
              )}
            </Flex>
          </Container>
        </Box>
      }

      <Container>
        <Heading sx={{
          mt: 5,
          mb: 4,
          fontSize: ['24px', '28px'],
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