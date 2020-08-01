import React from 'react'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'

import { MenuDataQuery } from '../../../../graphql-types'

export type LinkType = {
	title: string
	url: string
	className: string
}

const Link: React.FC<LinkType> = ({ url, title, className }) => {
	return (
		<GatsbyLink className={className} to={url} key={url}>
			<span className="is-uppercase has-text-weight-semibold is-full-width">
				{title}
			</span>
		</GatsbyLink>
	)
}

const query = graphql`
	query MenuData {
		allWordpressMenusMenusItems(filter: { slug: { eq: "main" } }) {
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
export type Props = {
	linkClassName?: string
}

const Links: React.FC<Props> = ({ linkClassName = '' }) => {
	const data = useStaticQuery<MenuDataQuery>(query)
	const { items } = data.allWordpressMenusMenusItems.edges[0].node
	return (
		<>
			{items?.map((item, index) => (
				<div className="column" key={index}>
					<Link
						title={item?.title ?? ''}
						url={item?.url ?? ''}
						className={linkClassName}
					/>
				</div>
			))}
		</>
	)
}

export default Links
