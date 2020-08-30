import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { LatestNewsQuery } from 'autogenerated/graphql-types'
import PostList from 'src/components/post-list/PostList'

const query = graphql`
  query LatestNews {
    allWpNews(limit: 6, sort: { order: DESC, fields: date }) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`

export type Props = {}

export const News: React.FC<Props> = ({}) => {
  const data = useStaticQuery<LatestNewsQuery>(query)
  const { edges } = data.allWpNews

  return <PostList posts={edges.map(x => x.node)} itemsPerRow={3} />
}

export default News
