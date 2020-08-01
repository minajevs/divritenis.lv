import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/PostList'

import { TagPageQuery } from '../../graphql-types'

type Props = {
	data: TagPageQuery
	pageContext: {
		currentPage: number
		numPages: number
		name: string
	}
}

const Tag: React.FC<Props> = props => {
	const { data, pageContext } = props
	const { edges: posts, totalCount } = data.allWordpressPost
	const siteTitle = data?.site?.siteMetadata?.title
	const { name: tag } = pageContext
	const title = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} with the tag ${tag}`

	return (
		<Layout>
			<Helmet title={`${tag} | ${siteTitle}`} />
			<PostList posts={posts} title={title} />
		</Layout>
	)
}

export default Tag

export const pageQuery = graphql`
	query TagPage($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		allWordpressPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
			totalCount
			edges {
				node {
					...PostListFields
				}
			}
		}
	}
`
