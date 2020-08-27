import React from 'react'
import './hero.scss'
import { Link as GatsbyLink } from 'gatsby'

export type Props = {
	text: string
	leftButtonText: string
	leftButtonLink: string
	rightButtonText: string
	rightButtonLink: string
	img: string
}

export const Hero: React.FC<Props> = ({
	text,
	leftButtonText,
	leftButtonLink,
	rightButtonText,
	rightButtonLink,
	img
}) => {
	return (
		<section
			className="hero is-primary"
			style={{ background: `url("${img}")` }}
		>
			<div className="hero-body">
				<div className="columns is-vcentered">
					<div className="column is-uppercase is-size-5 has-text-weight-semibold has-text-white">
						{text}
					</div>
					<div className="column is-narrow has-text-right">
						<GatsbyLink key={leftButtonLink} to={leftButtonLink}>
							<button className="button is-uppercase">{leftButtonText}</button>
						</GatsbyLink>
					</div>
					<div className="column is-narrow has-text-right">
						<GatsbyLink key={rightButtonLink} to={rightButtonLink}>
							<button className="button is-uppercase">{rightButtonText}</button>
						</GatsbyLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
