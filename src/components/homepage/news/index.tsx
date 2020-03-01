import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Card from './Card'

import './news.sass'

import { LatestNewsQuery } from '../../../../graphql-types'

const query = graphql`
  query LatestNews {
    allWordpressPost(limit: 6, sort: {order: DESC, fields: date}) {
      edges {
        node {
          title
          excerpt
          path
          acf {
            excerpt
            preview_image {
                source_url
                alt_text
            }
          }
        }
      }
    }
  }
`

export type Props = {}

export const News: React.FC<Props> = ({ }) => {
  return (
    <StaticQuery
      query={query}
      render={(data: LatestNewsQuery) => {
        const { edges } = data.allWordpressPost

        return (
          <div className="news-body">
            <div className="container">
              <div className="columns is-multiline">
                {edges.map(({ node }, i) => (
                  <div className="column is-one-third" key={i}>
                    <Card
                      title={node.title ?? ""}
                      excerpt={node.acf?.excerpt ?? ""}
                      image={{ url: node.acf?.preview_image?.source_url ?? "", alt: node.acf?.preview_image?.alt_text ?? "" }}
                      path={node.path ?? ""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>)
      }
      }
    />
  )
}

export default News