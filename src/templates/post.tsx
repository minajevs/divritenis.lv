import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

import { BlogPostByIdQuery, Wordpress__Category, Maybe } from '../../graphql-types'

type TemplateProps = {
  data: BlogPostByIdQuery
}

export const BlogPostTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { wordpressPost: post } = data

  if (!post
    || !post.content
    || !post.title) return (<>Error loading Post :( </>)

  const { title, content, date, author, categories, tags } = post
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div style={{ marginTop: `4rem` }}>
              <p>
                {date} - posted by{' '}
                <Link to={`/author/${author?.slug}`}>{author?.name}</Link>
              </p>
              {categories && categories.length ? (
                <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category?.slug}cat`}>
                        <Link to={`/categories/${category?.slug}/`}>
                          {category?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag?.slug}tag`}>
                        <Link to={`/tags/${tag?.slug}/`}>{tag?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Props = {
  data: BlogPostByIdQuery
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post?.title} | Blog`} />
      <BlogPostTemplate data={data} />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`
