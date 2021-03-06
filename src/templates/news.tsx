import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Pagination from '../components/Pagination'

import PostList from 'src/components/post-list/PostList'
import { NewsPageQuery } from 'autogenerated/graphql-types'

type Props = {
  data: NewsPageQuery
  pageContext: {
    currentPage: number
    numPages: number
  }
}

const NewsPage: React.FC<Props> = props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allWpNews

  return (
    <Layout breadcrumbs={['zinas']}>
      <PostList posts={posts.map(x => x.node)} itemsPerRow={4} />
      <Pagination pageContext={pageContext} pathPrefix="/" />
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query NewsPage($limit: Int!, $skip: Int!) {
    allWpNews(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
