import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import getBlock from '../utils/getWpBlockByName'

import { HomePageByIdQuery } from '../../graphql-types'

type Props = {
  data: HomePageByIdQuery
}

const HomePage: React.FC<Props> = ({ data }) => {
  const { wordpressPage: page } = data

  const headerBlock = getBlock('lazyblock/header', page?.blocks ?? null)

  if (headerBlock === null) return null

  return (
    <Layout>
      <div className="columns has-text-centered">
        <div className="column">
          <div className="box">
            Zinas
           </div>
        </div>
        <div className="column is-one-third">
          <div className="box">
            Kalendars
          </div>
        </div>
      </div>
      <div className="columns has-text-centered">
        <div className="column">
          <div className="columns">
            <div className="column is-half">
              <div className="box">
                Brauceja drosiba
               </div>
            </div>
            <div className="column is-half">
              <div className="box">
                Noderigi
               </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <div className="box">
                Velosipeda drosiba
              </div>
            </div>
            <div className="column is-half">
              <div className="box">
                J&A
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="box full-height">
            Aptauja
          </div>
        </div>
      </div>
      <div className="columns has-text-centered">
        <div className="column is-one-third">
          <div className="box">
            Citi resursi
          </div>
        </div>
        <div className="column is-one-third">
          <div className="box">
            Dokumenti
          </div>
        </div>
        <div className="column is-one-third">
          <div className="box">
            Par apvienibu
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
