import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { MenuDataQuery } from "../../../graphql-types"

type MenuQueryItems = MenuDataQuery['allWordpressMenusMenusItems']['edges'][0]['node']['items']

export type LinksBlock = LinkType[]

export type LinkType = {
    title: string,
    url: string
}

export type Props = {
    menuItems: MenuDataQuery['allWordpressMenusMenusItems']['edges'][0]['node']['items']
}

const Link: React.FC<LinkType> = (link) => {
    return (
        <GatsbyLink
            className="navbar-item"
            to={link.url}
            key={link.url}
        >
            <span className="is-uppercase has-text-weight-semibold">{link.title}</span>
        </GatsbyLink>

    )
}

const Links: React.FC<Props> = ({ menuItems }) => {
    return (
        <>
            <div className="columns is-multiline is-gapless is-vcentered">
                {menuItems?.map((item, index) => (
                    <div className="column is-one-third" key={index}>
                        <Link title={item?.title ?? ""} url={item?.url ?? ""} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Links