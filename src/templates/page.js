/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading, Text } from 'theme-ui'
import { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PillarLinks from '../components/PillarLinks'
import Arrow from '../images/arrow.svg'
import lottie from 'lottie-web'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import udiAnimation from '../animations/udi_updated.json'
import uhwAnimation from '../animations/uhw.json'
import govAnimation from '../animations/gov.json'
import economicAnimation from '../animations/economic.json'
import creativityAnimation from '../animations/creativity_updated.json'
import migrationAnimation from '../animations/migration_updated.json'

import udiAnimationWebp from '../animations/udi_updated_webp.json'
import uhwAnimationWebp from '../animations/uhw_webp.json'
import govAnimationWebp from '../animations/gov_webp.json'
import economicAnimationWebp from '../animations/economic_webp.json'
import creativityAnimationWebp from '../animations/creativity_updated_webp.json'
import migrationAnimationWebp from '../animations/migration_updated_webp.json'

const ANIMATIONS = {
  1: udiAnimation,
  2: uhwAnimation,
  3: govAnimation,
  4: economicAnimation,
  5: creativityAnimation,
  6: migrationAnimation
}

const ANIMATIONS_WEBP = {
  1: udiAnimationWebp,
  2: uhwAnimationWebp,
  3: govAnimationWebp,
  4: economicAnimationWebp,
  5: creativityAnimationWebp,
  6: migrationAnimationWebp
}

export default ({ pageContext, transitionStatus }) => {
  const {
    page: {
      id,
      title,
      content,
      uri,
      pageSettings: { articles, color, pageId }
    }
  } = pageContext

  const pageTitle = pageId === 1 ? 'Urban Design & Infrastructure'
    : pageId === 2 ? 'Urban Health & Wellbeing'
    : pageId === 3 ? 'Governance & Social Justice'
    : pageId === 4 ? 'Economic Development'
    : pageId === 5 ? 'Creativity & Culture'
    : 'Migration & Integration'

  const videoUrl = pageId === 1 ? 'https://www.youtube.com/embed/xPAJ0XCKSsQ'
    : pageId === 2 ? 'https://www.youtube.com/embed/6l4UbKrXnT4'
    : pageId === 3 ? 'https://www.youtube.com/embed/YJLppp5R_Ks'
    : pageId === 4 ? 'https://www.youtube.com/embed/l9bpVIcddUo'
    : pageId === 5 ? 'https://www.youtube.com/embed/oJ1W5h4OutE'
    : 'https://www.youtube.com/embed/9w637Ej3JGE'

  const desktopContainer = useRef()
  const mobileContainer = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') return

    document.body.style.height = '100%'

    const container = window.innerWidth < 900
      ? mobileContainer
      : desktopContainer

    const isNotSafari =
      navigator.userAgent.indexOf('Safari') > -1 &&
      navigator.userAgent.indexOf('Chrome') > -1

    let anim

    setTimeout(() => {
      anim = lottie.loadAnimation({
        container: container.current,
        renderer: window.innerWidth < 900 ? 'svg' : 'canvas',
        loop: false,
        autoplay: true,
        animationData: isNotSafari
          ? ANIMATIONS_WEBP[pageId]
          : ANIMATIONS[pageId]
      })

      anim.addEventListener('DOMLoaded', () => {
        container.current.style.opacity = 1
      })
    }, 1500)

    return () => anim ? anim.destroy() : null
  }, [pageId])

  return (
    <Layout bgColor={color}>
      <SEO title={pageTitle} slug={uri} />

      <Box sx={{
        pt: 3, pb: 5,
        backgroundColor: color
      }}>
        <Container>
          <Flex sx={{
            position: 'relative',
            width: '100%',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'space-between'
          }}>
            <Box sx={{ maxWidth: ['none', 'none', '50%'] }}>
              <Heading as="h1" dangerouslySetInnerHTML={{__html: title }} sx={{
                m: 0,
                fontSize: '36px',
                fontWeight: 'bold',
                lineHeight: '1.1em'
              }}/>

              <Text dangerouslySetInnerHTML={{__html: content}} sx={{
                maxWidth: '500px',
                fontFamily: 'serif',
                letterSpacing: '-0.05px',
                lineHeight: '1.4em'
              }}/>

              <Box ref={mobileContainer} sx={{
                display: ['block', 'block', 'none'],
                position: 'relative',
                width: '100%',
                minHeight: '340px',
                mt: 4
              }} />

              <Flex sx={{ flexDirection: 'column' }}>
                {articles.map(article => (
                  <AniLink
                    key={article.id}
                    paintDrip to={article.uri}
                    hex="#fff"
                    duration={1.5}
                    sx={{
                      color: 'black',
                      textDecoration: 'none',
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
                    <Box sx={{
                      display: 'flex',
                      flexDirection: ['column', 'column', 'row'],
                      alignItems: ['center', 'center', 'flex-start'],
                      textAlign: ['center', 'center', 'left'],
                      mt: [4, 4, 3, 3, 4],
                      mb: 2,
                      color: 'black',
                      textDecoration: 'none'
                    }}>
                      <Box className="article-icon" sx={{
                        position: 'relative',
                        width: '100px',
                        height: '100px',
                        mr: [0, 0, '24px'],
                        backgroundColor: article.postSettings.iconBackgroundColor,
                        transition: 'background-color .2s ease-in-out',
                        borderRadius: '50%',
                        flexGrow: '1',
                        flexShrink: '0',
                        flexBasis: 'auto'
                      }}>
                        {article.featuredImage &&
                          <img src={article.featuredImage.sourceUrl} alt="article" sx={{ maxWidth: '100%' }} />
                        }
                      </Box>

                      <Box sx={{ maxWidth: '425px', mt: [3, 3, 0] }}>
                        <Heading sx={{
                          m: 0,
                          fontSize: '22px',
                          fontFamily: 'serif',
                          fontWeight: 'bold',
                          textDecoration: 'underline',
                        }}>
                          {article.title}
                        </Heading>

                        <Box dangerouslySetInnerHTML={{__html: article.excerpt}} sx={{
                          fontSize: ['18px', '16px'],
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
                    </Box>
                  </AniLink>
                ))}
              </Flex>
            </Box>

            <Box ref={desktopContainer} sx={{
              display: ['none', 'none', 'block'],
              position: 'relative',
              width: ['500px', '500px', '500px', '520px', '600px'],
              height: ['500px', '500px', '500px', '520px', '600px'],
              mt: [null, null, null, -3, -4],
              mr: [null, null, null, null, -4],
              opacity: 0,
              transition: 'opacity .25s ease-in-out'
            }} />
          </Flex>
        </Container>
      </Box>

      <Container>
        <Box sx={{
          position: 'relative',
          mt: 6,
          paddingBottom: '56.25%',
          overflow: 'hidden',
          maxWidth: '100%',
          height: 0
        }}>
          <iframe
            title="A World of Innovation"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </Box>

        <Heading sx={{
          mt: 4,
          mb: 4,
          fontSize: ['24px', '28px'],
          fontWeight: 'bold',
        }}>
          Other areas of research and innovation
        </Heading>
        <PillarLinks pageId={id} />
      </Container>
    </Layout>
  )
}
