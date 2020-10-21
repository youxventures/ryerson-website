import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, slug, description, image, isBlogPost }) => {
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

  const { url } = site.siteMetadata

  const pageTitle = title || site.siteMetadata.title
  const desc = description || site.siteMetadata.description
  const img = image || site.siteMetadata.image
  const pageUrl = slug ? `${url}${slug}` : url

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - Ryerson University">
        {/* General tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <meta name="image" content={img} />
        <meta name="google-site-verification" content="QzUqFUXSVtaGAsLuUARenYCFKFMfIEbEFi6IvUKaKVM" />
        <link rel="canonical" href={pageUrl} />

        {/* OpenGraph tags */}
        <meta property="og:title" content={pageTitle} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={img} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@RyersonU" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={img} />
      </Helmet>
    </React.Fragment>
  )
}

export default SEO
