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
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          Logo
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              Zinas
            </div>
            <div className="column">
              Noderigi
            </div>
            <div className="column">
              Dokumenti
            </div>
          </div>
          <div className="columns">
            <div className="column">
              Kalendars
            </div>
            <div className="column">
              Drosiba
            </div>
            <div className="column">
              Apvieniba
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-third is-offset-two-thirds">
          <div className="columns">
            <div className="column">
              Meklesana
            </div>
            <div className="column">
              Socialie tikli
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          Zinas
        </div>
        <div className="column is-one-third">
          Kalendars
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="columns">
            <div className="column is-half">
              Brauceja drosiba
            </div>
            <div className="column is-half">
              Noderigi
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              Velosipeda drosiba
            </div>
            <div className="column is-half">
              J&A
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          Aptauja
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-third">
          Citi resursi
          </div>
        <div className="column is-one-third">
          Dokumenti
          </div>
        <div className="column is-one-third">
          Par apvienibu
          </div>
      </div>
      <div className="columns">
        <div className="column is-full">
          Info par lapu
        </div>
      </div>
    </div>
  )
}

type Props = {
  data: HomePageByIdQuery
}


const HomePage: React.FC<Props> = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <PageTemplate title={page?.title ?? ""} content={page?.content ?? ""} />
  )
}

export default HomePage

export const pageQuery = graphql`
  query HomePageById($id: String) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
