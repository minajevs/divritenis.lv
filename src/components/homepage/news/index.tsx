import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Card from './Card'

import './news.scss'

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
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export type Props = {}

export const News: React.FC<Props> = ({ }) => {
  const data = useStaticQuery<LatestNewsQuery>(query)
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
                image={{ img: node.acf?.preview_image?.localFile?.childImageSharp?.fluid!, alt: node.acf?.preview_image?.alt_text ?? "" }}
                path={node.path ?? ""}
              />
            </div>
          ))}
        </div>
      </div>
    </div>)
}

export default News