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
    title: `A World of Innovation`,
    description: `From designing cities that are green to shaping societies that are equitable, see how we’re innovating today to build a brighter tomorrow.`,
    author: `Ryerson University`,
    url: `https://innovation.ryerson.ca`,
    siteUrl: `https://innovation.ryerson.ca`,
    image: "https://media-ryu.youxventures.com/wp-content/uploads/2020/10/social.jpg",
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "innovation.ryerson.ca",
        protocol: "https",
        hostname: "innovation.ryerson.ca",
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        injectPageProps: false,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A World of Innovation - Ryerson University`,
        short_name: `A World of Innovation - Ryerson University`,
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
