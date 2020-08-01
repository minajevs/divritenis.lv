import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { parseISO } from 'date-fns'

import Card from './Card'

import { RecommendedPostsQuery } from '../../../../../graphql-types'

import './recommended-posts.scss'

const query = graphql`
	query RecommendedPosts {
		allWordpressPost(limit: 3, sort: { order: DESC, fields: date }) {
			edges {
				node {
					title
					path
					date
					acf {
						preview_image {
							source_url
							alt_text
						}
					}
				}
			}
		}
	}
`

export type Props = {}

export const RecommendedPosts: React.FC<Props> = ({}) => {
	const data = useStaticQuery<RecommendedPostsQuery>(query)
	const { edges } = data.allWordpressPost

	return (
		<div className="recommended-posts">
			<div className="box has-text-centered header">
				<h4>Ieteiktie raksti</h4>
			</div>
			<div className="posts">
				{edges.map(({ node }, i) => (
					<div className="box" key={i}>
						<Card
							title={node.title ?? ''}
							image={{
								url: node.acf?.preview_image?.source_url ?? '',
								alt: node.acf?.preview_image?.alt_text ?? ''
							}}
							path={node.path ?? ''}
							date={parseISO(node.date) ?? new Date()}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecommendedPosts
