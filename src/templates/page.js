/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading, Text } from 'theme-ui'
import { useEffect, createRef } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PillarLinks from '../components/PillarLinks'
import Arrow from '../images/arrow.svg'
import udiAnimation from '../animations/udi.json'
import uhwAnimation from '../animations/uhw.json'
import lottie from 'lottie-web'

export default ({ pageContext }) => {
  const {
    page: {
      id,
      title,
      pageId,
      content,
      pageSettings: { articles, color }
    }
  } = pageContext

  const desktopContainer = createRef()
  const mobileContainer = createRef()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ANIMATIONS = {
      2: udiAnimation,
      68: uhwAnimation
    }

    // health 68
    // migration 80
    // creative 76
    // economy 72
    // gov 60
    // infra 2

    const container = window.innerWidth < 900
      ? mobileContainer
      : desktopContainer

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: ANIMATIONS[pageId]
    })

    return () => anim.destroy()
  }, [desktopContainer, mobileContainer, pageId])

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

              <Box ref={mobileContainer} sx={{
                display: ['block', 'block', 'none'],
                position: 'relative',
                width: '100%',
                mt: 4
              }} />

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
                        fontSize: '16px',
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

            <Box ref={desktopContainer} sx={{
              display: ['none', 'none', 'block'],
              position: 'relative',
              width: '600px',
              height: '600px',
              mt: -4,
              mr: -4
            }} />
          </Flex>
        </Container>
      </Box>

      <Container>
        <Heading sx={{
          mt: 5,
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
