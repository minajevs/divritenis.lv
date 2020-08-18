import React from 'react'
import { Link } from 'gatsby'

import { PostInfoSection } from './PostInfoSection'
import { Nullable } from 'src/utils/helperTypes'

import './post-info.scss'

type Tag = {
	slug?: Nullable<string>
	name?: Nullable<string>
}

type TagList = Nullable<Nullable<Tag>[]>

const Tags: React.FC<{ tags: TagList }> = ({ tags }) => {
	if (!tags || !tags.length) return null

	return (
		<div className="tags">
			{tags.map(tag => (
				<span key={`${tag?.slug}tag`} className="tag">
					<Link to={`/tags/${tag?.slug}/`}>{tag?.name}</Link>
				</span>
			))}
		</div>
	)
}

export type Props = {
	date: Date
	tags: TagList
}

export const PostInfo: React.FC<Props> = ({ date, tags }) => {
	return (
		<>
			<PostInfoSection title="Publicēts">
				{date.toLocaleDateString('lv-LV', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</PostInfoSection>
			<PostInfoSection title="Birkas">
				<Tags tags={tags} />
			</PostInfoSection>
		</>
	)
}

export default PostInfo
