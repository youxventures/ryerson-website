/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading, Text } from 'theme-ui'
import { useEffect, createRef } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
// import Seo from '../components/Seo'
import PillarLinks from '../components/PillarLinks'
import Arrow from '../images/arrow.svg'
import udiAnimation from '../animations/udi.json'
import uhwAnimation from '../animations/uhw.json'
import govAnimation from '../animations/gov.json'
import lottie from 'lottie-web'

export default ({ pageContext }) => {
  const {
    page: {
      id,
      title,
      content,
      pageSettings: { articles, color, pageId }
    }
  } = pageContext

  const desktopContainer = createRef()
  const mobileContainer = createRef()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ANIMATIONS = {
      1: udiAnimation,
      2: uhwAnimation,
      3: govAnimation
    }

    // infra 1
    // health 2
    // gov 3
    // economy 4
    // creative 5
    // migration 6

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

    anim.stop()

    desktopContainer.current.style.opacity = 1

    anim.play()

    return () => anim.destroy()
  }, [desktopContainer, mobileContainer, pageId])

  return (
    <Layout bgColor={color}>
      {/* <Seo title={title} /> */}

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
                maxWidth: '500px',
                fontFamily: 'serif'
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
              opacity: 0,
              display: ['none', 'none', 'block'],
              position: 'relative',
              width: '600px',
              height: '600px',
              mt: -4,
              mr: -4,
              transition: 'opacity .25s ease-in-out',
              transitionDelay: '.5s'
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
