import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import './breadcrumbs.scss'

// Maps all page codes to corresponding page titles
const pages = {
    '': '', // empty option needed in some cases
    '/': 'Sākumlapa'
}

export type PageKey = keyof typeof pages

export type BreadcrumbsItem = {
    title: string
    path: PageKey
}

type Props = {
    pageKeys: PageKey[]
}

const Breadcrumbs: React.FC<Props> = ({ pageKeys }) => {
    if (pageKeys.length === 0) return null

    const items = pageKeys.map<BreadcrumbsItem>(key => ({
        path: key,
        title: pages[key]
    }))

    return (
        <div className="container">
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    {items.map((item, i) => (
                        <li key={i} className={i === items.length - 1 ? 'is-active' : undefined}>
                            {item.path !== ''
                                ? <GatsbyLink
                                    to={item.path}
                                    key={item.path}
                                >
                                    <span
                                        aria-current={i === items.length - 1 ? 'page' : undefined}>
                                        {item.title}
                                    </span>
                                </GatsbyLink>
                                : null
                            }
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Breadcrumbs
