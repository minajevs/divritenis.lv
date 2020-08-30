import React from 'react'
import { format } from 'date-fns'

export type Props = {
	title: string
	excerpt: string
	image: {
		url: string
		alt: string
	}
	path: string
	date: Date
	excerptClassName: string
}

export const Card: React.FC<Props> = ({
	title,
	excerpt,
	image,
	path,
	date,
	excerptClassName = ''
}) => {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-2by1">
					<img src={image.url} alt={image.alt} />
				</figure>
			</div>
			<div className="card-content">
				<p className="card-header-subtitle is-size-7    has-text-grey">
					{format(date, 'dd.MM.yyyy')}
				</p>
				<p className="card-header-title">{title}</p>
				<div className={`content ${excerptClassName}`}>
					<div className="excerpt">{excerpt}</div>
				</div>
			</div>
			<div className="card-footer">
				<a className="has-text-weight-semibold" href={`/${path}`}>
					Lasīt vairāk
				</a>
			</div>
		</div>
	)
}

export default Card
