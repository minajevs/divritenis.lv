import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/PostList'

import { AuthorPageQuery, PostListFieldsFragment } from '../../graphql-types'

const Author: React.FC<{ data: AuthorPageQuery }> = ({ data }) => {
	const author = data.wordpressWpUsers?.authored_wordpress__POST
	const name = data.wordpressWpUsers?.name
	const totalCount = (author && author.length) || 0
	const siteTitle = data.site?.siteMetadata?.title
	const title = `${totalCount} post${totalCount === 1 ? '' : 's'} by ${name}`

	// The `authored_wordpress__POST` returns a simple array instead of an array
	// of edges / nodes. We therefore need to convert the array here.
	const posts =
		author?.map(post => ({
			node: post ?? ({} as PostListFieldsFragment)
		})) ?? []

	return (
		<Layout>
			<Helmet title={`${name} | ${siteTitle}`} />
			<PostList posts={posts} title={title} />
		</Layout>
	)
}

export default Author

export const pageQuery = graphql`
	query AuthorPage($id: String!) {
		site {
			siteMetadata {
				title
			}
		}
		wordpressWpUsers(id: { eq: $id }) {
			name
			authored_wordpress__POST {
				...PostListFields
			}
		}
	}
`
