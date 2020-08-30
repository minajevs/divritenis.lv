require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: 'Divritenis.lv'
  },
  plugins: [
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'autogenerated/graphql-types.ts'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true
      }
    },
    {
      resolve: 'gatsby-source-wordpress-experimental',
      options: {
        // The base url to your WP site.
        url: process.env.GATSBY_WP_URL + '/graphql',
        verbose: true,
        develop: {
          hardCacheMediaFiles: true
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true
          }
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000
          }
        },
        //hostingWPCOM: false,
        //protocol: 'https',
        //useACF: true,
        auth: {}
        //verboseOutput: false,
        // prevents weird console errors: https://github.com/gatsbyjs/gatsby/issues/7079
        //excludedRoutes: ["/wp/v2/users/me", "/wp/v2/settings", "/wp/v2/themes", "/lazy-blocks/v1/block-render", "/lazy-blocks/v1/update-block-data"],
      }
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
    'gatsby-plugin-typescript-checker',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: false,
        // Purge only the main css file
        purgeOnly: ['/all.scss'],
        // Do not purge patterns
        whitelistPatterns: [/^is-/]
      }
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
