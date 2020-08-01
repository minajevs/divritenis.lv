import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { parseISO } from 'date-fns'

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
          date
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

const getMobileNewsCardStyle = (index: number) =>
  index > 0 ? 'is-half-mobile' : 'is-full-mobile'

const getMobileNewsCardExcerptStyle = (index: number) =>
  index > 0 ? 'is-hidden-mobile' : ''

export type Props = {}

export const News: React.FC<Props> = ({ }) => {
  const data = useStaticQuery<LatestNewsQuery>(query)
  const { edges } = data.allWordpressPost

  return (
    <div className="news-body">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {edges.map(({ node }, i) => (
            <div className={`column is-one-third-desktop ${getMobileNewsCardStyle(i)}`} key={i}>
              <Card
                title={node.title ?? ""}
                excerpt={node.acf?.excerpt ?? ""}
                image={{ url: node.acf?.preview_image?.source_url ?? "", alt: node.acf?.preview_image?.alt_text ?? "" }}
                path={node.path ?? ""}
                date={parseISO(node.date) ?? new Date()}
                excerptClassName={getMobileNewsCardExcerptStyle(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>)
}

export default News