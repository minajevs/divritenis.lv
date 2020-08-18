import React from 'react'

export type Props = {
	title: string
}

export const PostInfoSection: React.FC<Props> = ({ title, children }) => {
	return (
		<div className="box">
			<div className="container">
				<div className="has-text-centered">
					<h4>{title}</h4>
				</div>
				{children}
			</div>
		</div>
	)
}

export default PostInfoSection
