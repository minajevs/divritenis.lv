const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.tsx`)
      const homePageTemplate = path.resolve(`./src/pages/homepage.tsx`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWordpressPage.edges
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        if (page.slug == "home-page") {
          createPage({
            path: `/`,
            component: homePageTemplate,
            context: {
              id: page.id,
            },
          })
        } else {
          createPage({
            path: `/${page.slug}/`,
            component: pageTemplate,
            context: {
              id: page.id,
            },
          })
        }
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/post.tsx`)
      const blogTemplate = path.resolve(`./src/templates/blog.tsx`)

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWordpressPost.edges
      const posts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/${post.slug}/`,
          component: postTemplate,
          context: {
            id: post.id,
          },
        })
      })

      // Create a paginated blog, e.g., /, /page/2, /page/3
      paginate({
        createPage,
        items: posts,
        itemsPerPage: 10,
        pathPrefix: `/page`,
        component: blogTemplate,
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressCategory(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const categoriesTemplate = path.resolve(`./src/templates/category.tsx`)

      // Create a Gatsby page for each WordPress Category
      _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
        createPage({
          path: `/categories/${cat.slug}/`,
          component: categoriesTemplate,
          context: {
            name: cat.name,
            slug: cat.slug,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressTag(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `)
    })

    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const tagsTemplate = path.resolve(`./src/templates/tag.tsx`)

      // Create a Gatsby page for each WordPress tag
      _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
        createPage({
          path: `/tags/${tag.slug}/`,
          component: tagsTemplate,
          context: {
            name: tag.name,
            slug: tag.slug,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressWpUsers {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const authorTemplate = path.resolve(`./src/templates/author.tsx`)

      _.each(result.data.allWordpressWpUsers.edges, ({ node: author }) => {
        createPage({
          path: `/author/${author.slug}`,
          component: authorTemplate,
          context: {
            id: author.id,
          },
        })
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
