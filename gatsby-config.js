require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: process.env.WP_URL,
        hostingWPCOM: false,
        protocol: 'http',
        useACF: false,
        auth: {},
        verboseOutput: false,
        // prevents weird console errors: https://github.com/gatsbyjs/gatsby/issues/7079
        excludedRoutes: ["/wp/v2/users/me", "/acf/v2/options", "/wp/v2/settings", "/wp/v2/themes", "/lazy-blocks/v1/block-render", "/lazy-blocks/v1/update-block-data"],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: false,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
        // Do not purge patterns
        whitelistPatterns: [/^is-/]
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
