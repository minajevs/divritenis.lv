import React from 'react'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'

import { MenuDataQuery } from "../../../../graphql-types"

export type LinkType = {
    title: string,
    url: string
}

const Link: React.FC<LinkType> = (link) => {
    return (
        <GatsbyLink
            className="navbar-item"
            to={link.url}
            key={link.url}
        >
            <span className="is-uppercase has-text-weight-semibold is-full-width">{link.title}</span>
        </GatsbyLink>

    )
}

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

const Links: React.FC = () => {
    const data = useStaticQuery<MenuDataQuery>(query)
    const { items } = data.allWordpressMenusMenusItems.edges[0].node
    return (
        <>
            <div className="columns is-gapless is-vcentered is-full-width has-text-centered">
                {items?.map((item, index) => (
                    <div className="column" key={index}>
                        <Link title={item?.title ?? ""} url={item?.url ?? ""} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Links