import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import { getWpBlockByName } from '../utils/getWpBlockByName'

import { HomePageByIdQuery } from '../../graphql-types'
import News from '../components/homepage/news'
import Calendar from '../components/homepage/calendar'

type Props = {
  data: HomePageByIdQuery
}

const HomePage: React.FC<Props> = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <div className="columns">
        <div className="column">
          <News />
        </div>
        <div className="column is-one-quarter">
          <Calendar />
        </div>
      </div>
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
      }
    }
  }
`
