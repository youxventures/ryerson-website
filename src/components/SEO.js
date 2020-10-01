import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image
          }
        }
      }
    `
  )

  const siteTitle = title || site.title
  const { description, url, image } = site

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}

        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="QzUqFUXSVtaGAsLuUARenYCFKFMfIEbEFi6IvUKaKVM" />

        {/* OpenGraph tags */}

        <meta property="og:title" content={siteTitle} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

      </Helmet>
    </React.Fragment>
  )
}

export default SEO
