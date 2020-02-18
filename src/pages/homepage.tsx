import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import { HomePageByIdQuery } from '../../graphql-types'

type TemplateProps = {
  title: string,
  content: string
}

export const PageTemplate: React.FC<TemplateProps> = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Props = {
  data: HomePageByIdQuery
}


const Page: React.FC<Props> = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <PageTemplate title={page?.title ?? ""} content={page?.content ?? ""} />
  )
}

export default Page

export const pageQuery = graphql`
  query HomePageById($id: String) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
