import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Logo from './Logo'
import Links from './Links'

import { MenuDataQuery } from "../../../../graphql-types"
import SocialLinks from './SocialLinks'

const query = graphql`
  query MenuData {
    allWordpressMenusMenusItems(filter: {slug: {eq: "main"}}) {
      edges {
        node {
          items {
            title
            url
          }
        }
      }
    }
  }
`

const Navbar: React.FC = () => (
  <StaticQuery
    query={query}
    render={(data: MenuDataQuery) => (
      <>
        <nav className="navbar is-transparent">
          <div className="container">
            <div className="navbar-brand">
              <Logo />
            </div>
            <div className="navbar-end">
              <Links menuItems={data.allWordpressMenusMenusItems.edges[0].node.items} />
            </div>
          </div>
        </nav>

        <div className="columns header-row">
          <div className="container">
            <div className="column is-one-third is-offset-two-thirds">
              <div className="columns is-vcentered has-text-centered">
                <div className="column">
                  Meklēšana
                </div>
                <div className="column">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

export default Navbar
