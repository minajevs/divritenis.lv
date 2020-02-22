import React from 'react'
import { graphql } from 'gatsby'
import Navbar from '../components/navbar'

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
    <>
      <Navbar />
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
            <div className="notification">
              Zinas
           </div>
          </div>
          <div className="column is-one-third">
            <div className="notification">
              Kalendars
          </div>
          </div>
        </div>
        <div className="columns has-text-centered">
          <div className="column">
            <div className="columns">
              <div className="column is-half">
                <div className="notification">
                  Brauceja drosiba
               </div>
              </div>
              <div className="column is-half">
                <div className="notification">
                  Noderigi
               </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <div className="notification">
                  Velosipeda drosiba
              </div>
              </div>
              <div className="column is-half">
                <div className="notification">
                  J&A
              </div>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="notification full-height">
              Aptauja
          </div>
          </div>
        </div>
        <div className="columns has-text-centered">
          <div className="column is-one-third">
            <div className="notification">
              Citi resursi
          </div>
          </div>
          <div className="column is-one-third">
            <div className="notification">
              Dokumenti
          </div>
          </div>
          <div className="column is-one-third">
            <div className="notification">
              Par apvienibu
          </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <div className="notification has-text-centered">
              Info par lapu
           </div>
          </div>
        </div>
      </div>
    </>
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
