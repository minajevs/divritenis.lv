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
            Ziņas
           </div>
        </div>
        <div className="column is-one-third">
          <div className="box">
            Kalendārs
          </div>
        </div>
      </div>
      <div className="columns has-text-centered">
        <div className="column">
          <div className="columns">
            <div className="column is-half">
              <div className="box">
                Braucēja drošība
               </div>
            </div>
            <div className="column is-half">
              <div className="box">
                Noderīgi
               </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <div className="box">
                Velosipēda drošība
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
            Par apvienību
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
