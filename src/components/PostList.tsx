import React from 'react'
import { Link, graphql } from 'gatsby'

import { PostListFieldsFragment } from 'autogenerated/graphql-types'
import { Nullable } from 'src/utils/helperTypes'
import Card from './PostListCard'
import { parseISO } from 'date-fns'

type Props = {
	title: string
	posts: Nullable<PostListFieldsFragment>[]
}

const PostList: React.FC<Props> = ({ posts, title }) => {
	return (
		<section className="section">
			<div className="container">
				<div className="content">
					<h1 className="has-text-weight-bold is-size-2">{title}</h1>
				</div>
				{posts.map(
					(post, i) =>
						post && (
							<div className="box" key={i}>
								<Card
									title={post?.title ?? ''}
									image={{
										url: post?.post_preview?.previewImage?.sourceUrl ?? '',
										alt: post?.post_preview?.previewImage?.altText ?? ''
									}}
									path={post.slug ?? ''}
									date={parseISO(post.date) ?? new Date()}
								/>
							</div>
						)
				)}
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
		post_preview {
			previewImage {
				sourceUrl
				altText
			}
		}
		date
		slug
	}
`
