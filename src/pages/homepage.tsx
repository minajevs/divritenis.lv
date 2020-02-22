import React from 'react'
import { graphql } from 'gatsby'
import Logo from '../components/homepage/Logo'
import Links from '../components/homepage/Links'

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
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <Logo logoAttr={headerBlock.attrs?.logo ?? ""} />
        </div>
        <div className="column">
          <Links />
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
