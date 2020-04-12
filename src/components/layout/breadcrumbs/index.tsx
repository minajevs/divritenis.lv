import React, { useContext } from 'react'
import { BreadcrumbsItem, context } from '../../../utils/useBreadcrumbs'

const Breadcrumbs: React.FC = props => {
    const { items } = useContext(context)

    console.log(items)

    if (items.length === 0) return null

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                {items.map((item, i) => (
                    <li key={i} className={i === items.length - 1 ? 'is-active' : undefined}>
                        <a href={item.path} aria-current={i === items.length - 1 ? 'page' : undefined}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Breadcrumbs
