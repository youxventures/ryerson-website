let activeEnv = process.env.GATSBY_ACTIVE_ENV
  || process.env.NODE_ENV
  || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint used is: '${process.env.WORDPRESS_URL}'`)

module.exports = {
  siteMetadata: {
    title: `Ryerson Innovation`,
    description: `Website description.`,
    author: `Kevin Ivan @kvzivn`,
    siteUrl: `https://innovation.ryerson.ca`
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        injectPageProps: false,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Advanced`,
        short_name: `gatsby-starter-wordpress-advanced`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `${process.env.WORDPRESS_URL}/graphql`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MJMHPZ",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      }
    }
  ]
}
