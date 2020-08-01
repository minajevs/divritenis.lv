import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'

import { IndexQueryQuery } from '../../graphql-types'

type Props = {
	data: IndexQueryQuery
	pageContext: {
		currentPage: number
		numPages: number
	}
}

const BlogPage: React.FC<Props> = props => {
	const { data, pageContext } = props
	const { edges: posts } = data.allWordpressPost

	return (
		<Layout>
			<PostList posts={posts} title="Latest posts" />
			<Pagination pageContext={pageContext} pathPrefix="/" />
		</Layout>
	)
}

export default BlogPage

export const pageQuery = graphql`
	query IndexQuery($limit: Int!, $skip: Int!) {
		allWordpressPost(
			sort: { fields: date, order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					...PostListFields
				}
			}
		}
	}
`
