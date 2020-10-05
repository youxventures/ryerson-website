import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, slug }) => {
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

  const { description, url, image } = site.siteMetadata

  const pageTitle = title || site.siteMetadata.title
  const pageUrl = slug ? `${url}${slug}` : url

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - Ryerson University">
        {/* General tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="QzUqFUXSVtaGAsLuUARenYCFKFMfIEbEFi6IvUKaKVM" />

        {/* OpenGraph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={image} />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>
    </React.Fragment>
  )
}

export default SEO
