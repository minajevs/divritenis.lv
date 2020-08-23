import React from 'react'
import { Link, graphql } from 'gatsby'

import { PostListFieldsFragment } from 'autogenerated/graphql-types'

type Props = {
	title: string
	posts: { node: PostListFieldsFragment }[]
}

const PostList: React.FC<Props> = ({ posts, title }) => {
	return (
		<section className="section">
			<div className="container">
				<div className="content">
					<h1 className="has-text-weight-bold is-size-2">{title}</h1>
				</div>
				{posts.map(({ node: post }) => (
					<div
						className="content"
						style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
						key={post.id}
					>
						<p>
							<Link className="has-text-primary" to={post.slug ?? ''}>
								{post.title}
							</Link>
							<span> &bull; </span>
							<small>
								{post.date} - posted by{' '}
								<Link to={`/author/${post.author?.slug}`}>
									{post.author?.name}
								</Link>
							</small>
						</p>
						<div>
							<div
								dangerouslySetInnerHTML={{
									__html:
										post.excerpt?.replace(/<p class="link-more.*/, '') ?? ''
								}}
							/>
							<Link className="button is-small" to={post.slug ?? ''}>
								Keep Reading →
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default PostList

export const pageQuery = graphql`
	fragment PostListFields on WpPost {
		id
		title
		excerpt
		author {
			node {
				name
				slug
			}
		}
		date(formatString: "MMMM DD, YYYY")
		slug
	}
`
