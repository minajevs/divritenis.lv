import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import './breadcrumbs.scss'

// Maps all page codes to corresponding page titles
const pages = {
	'': '', // empty option needed in some cases
	'/': 'Sākumlapa',
	page: 'Ziņas' // TODO: dedicated pages for news/blogs/posts list
}

type PageKey = keyof typeof pages

export class BreadcrumbsFactory {
	static empty = (): BreadcrumbsItem => ({
		title: '',
		path: ''
	})

	static currentPage = (title: string, path: string = ''): BreadcrumbsItem => ({
		title,
		path
	})
}

export type PageKeys = Array<PageKey | BreadcrumbsItem>

export type BreadcrumbsItem = {
	title: string
	path: PageKey | string
}

type Props = {
	pageKeys: PageKeys
}

const Breadcrumbs: React.FC<Props> = ({ pageKeys }) => {
	if (pageKeys.length === 0) return null

	const items = pageKeys.map<BreadcrumbsItem>(key => {
		if (typeof key === 'string')
			return {
				path: key,
				title: pages[key]
			}
		return key
	})

	return (
		<div className="container">
			<nav className="breadcrumb" aria-label="breadcrumbs">
				<ul>
					{items.map((item, i) => (
						<li
							key={i}
							className={i === items.length - 1 ? 'is-active' : undefined}
						>
							<GatsbyLink to={item.path} key={item.path}>
								<span
									aria-current={i === items.length - 1 ? 'page' : undefined}
								>
									{item.title}
								</span>
							</GatsbyLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Breadcrumbs
