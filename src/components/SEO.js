import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import socialImage from '../images/social.jpg'

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={metaDescription} />
        <meta name="image" content={socialImage} />

        <meta name="google-site-verification" content="QzUqFUXSVtaGAsLuUARenYCFKFMfIEbEFi6IvUKaKVM" />

        {/* OpenGraph tags */}

        {/* <meta property="og:url" content={url} /> */}
        {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
        {/* <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

        {/* Twitter Card tags */}

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
      </Helmet>
    </React.Fragment>
  )
}

export default SEO
