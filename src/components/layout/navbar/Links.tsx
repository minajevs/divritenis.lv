import React from 'react'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'

import { MenuDataQuery } from 'autogenerated/graphql-types'

export type LinkType = {
	label: string
	url: string
	className: string
}

const Link: React.FC<LinkType> = ({ url, label, className }) => {
	return (
		<GatsbyLink className={className} to={url} key={url}>
			<span className="is-uppercase has-text-weight-semibold is-full-width">
				{label}
			</span>
		</GatsbyLink>
	)
}

const query = graphql`
	query MenuData {
		allWpMenuItem {
			nodes {
				label
				url
			}
		}
	}
`
export type Props = {
	linkClassName?: string
}

const Links: React.FC<Props> = ({ linkClassName = '' }) => {
	const data = useStaticQuery<MenuDataQuery>(query)
	const { nodes } = data.allWpMenuItem
	console.log(nodes)
	return (
		<>
			{nodes?.map((item, index) => (
				<div className="column" key={index}>
					<Link
						label={item?.label ?? ''}
						url={item?.url ?? ''}
						className={linkClassName}
					/>
				</div>
			))}
		</>
	)
}

export default Links
