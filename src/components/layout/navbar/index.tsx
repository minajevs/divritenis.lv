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
        <nav role="header" aria-label="header row" className="navbar is-transparent">
          <div className="container">
            <div className="navbar-brand">
              <Logo />
            </div>
            <div className="navbar-end">
              <SocialLinks />
            </div>
          </div>
        </nav>

        <nav role="navigation" aria-label="main navigation" className="navbar is-transparent row">
          <div className="container">
            <div className="navbar-menu">
              <Links menuItems={data.allWordpressMenusMenusItems.edges[0].node.items} />
            </div>
          </div>
        </nav>
      </>
    )}
  />
)

export default Navbar
