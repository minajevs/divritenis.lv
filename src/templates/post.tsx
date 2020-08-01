import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { BreadcrumbsFactory } from '../components/layout/breadcrumbs'

import {
	BlogPostByIdQuery,
	Wordpress__Category,
	Maybe
} from '../../graphql-types'
import PostInfo from '../components/homepage/post/PostInfo'
import { parseJSON } from 'date-fns'
import RecommendedPosts from '../components/homepage/post/recommended-posts/RecommendedPosts'

type TemplateProps = {
	data: BlogPostByIdQuery
}

export const BlogPostTemplate: React.FC<TemplateProps> = ({ data }) => {
	const { wordpressPost: post } = data

	if (!post || !post.content || !post.title) return <>Error loading Post :( </>

	const { title, content, date, author, categories, tags } = post
	return (
		<div className="container content">
			<div className="columns">
				<div className="column is-three-quarters">
					<h1 className="is-size-2 has-text-weight-bold is-bold-light">
						{title}
					</h1>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
				<div className="column">
					<PostInfo date={parseJSON(date)} tags={tags} />
					<RecommendedPosts />
				</div>
			</div>
		</div>
	)
}

type Props = {
	data: BlogPostByIdQuery
}

const BlogPost: React.FC<Props> = ({ data }) => {
	const { wordpressPost: post } = data

	return (
		<Layout
			breadcrumbs={['page', BreadcrumbsFactory.currentPage(post?.title || '')]}
		>
			<Helmet title={`${post?.title} | Blog`} />
			<BlogPostTemplate data={data} />
		</Layout>
	)
}

export default BlogPost

export const pageQuery = graphql`
	fragment PostFields on wordpress__POST {
		id
		slug
		content
		date
		title
	}
	query BlogPostByID($id: String!) {
		wordpressPost(id: { eq: $id }) {
			id
			title
			slug
			content
			date
			categories {
				name
				slug
			}
			tags {
				name
				slug
			}
			author {
				name
				slug
			}
		}
	}
`
