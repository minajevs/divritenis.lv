import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import getBlock from '../utils/getWpBlockByName'

import { HomePageByIdQuery } from '../../graphql-types'
import News from '../components/homepage/news'

type Props = {
  data: HomePageByIdQuery
}

const HomePage: React.FC<Props> = ({ data }) => {
  const { wordpressPage: page } = data

  const headerBlock = getBlock('lazyblock/header', page?.blocks ?? null)

  if (headerBlock === null) return null

  return (
    <Layout>
      <div className="columns">
        <div className="column">
          <News />
        </div>
        <div className="column is-one-quarter">
          <div className="box">
            Kalendārs
          </div>
          <div className="box">
            Aptauja
          </div>
        </div>
      </div>
      <section className="hero is-primary">
      <div className="hero-body">
        <div className="columns is-vcentered">
          <div className="column is-uppercase is-size-5 has-text-weight-semibold has-text-white">
            Vēlies uzlabot ikdienas velobraucēju dzīvi Rīgā vai visā Latvijā?
          </div>
          <div className="column is-one-quarter">
            <button className="button is-uppercase">Kļūsti par brīvprātīgo!</button>
          </div>
          <div className="column is-one-quarter">
            <button className="button is-uppercase">Kļūsti par biedru!</button>
          </div>
        </div>
        </div>
      </section>
      <br />
      <div className="columns has-text-centered">
        <div className="column is-half">
          <div className="box">
            Informācijas katalogi
          </div>
        </div>
        <div className="column is-half">
          <div className="box">
            Velobraucēju drošība
          </div>
        </div>
      </div>
      <div className="columns has-text-centered">
        <div className="column is-half">
          <div className="box">
            Jautājumi un atbildes
          </div>
        </div>
        <div className="column is-half">
          <div className="box">
            Velosipēda drošība
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query HomePageById($id: String) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      blocks {
        blockName
        attrs {
          links
          logo
        }
      }
    }
  }
`
