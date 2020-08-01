import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import DraugiemIcon from '../../../img/draugiem-icon.inline.svg'

export type Props = {}

// TODO: Source links from Wordpress?
export const SocialLinks: React.FC = () => {
	return (
		<div className="columns social-links">
			<SocialLink title="Facebook" url="/">
				<IoLogoFacebook size="2em" />
			</SocialLink>
			<SocialLink title="Instagram" url="/">
				<IoLogoInstagram size="2em" />
			</SocialLink>
			<SocialLink title="Twitter" url="/">
				<IoLogoTwitter size="2em" />
			</SocialLink>
			<SocialLink title="Draugiem" url="/">
				<DraugiemIcon />
			</SocialLink>
		</div>
	)
}

type SocialLinkProps = {
	title: string
	url: string
	children: React.ReactNode
}

const SocialLink: React.FC<SocialLinkProps> = ({ title, url, children }) => (
	<div className="column">
		<a
			className="social-icon"
			href={url}
			rel="noopener noreferrer"
			target="_blank"
			title={title}
		>
			<span className="icon">{children}</span>
		</a>
	</div>
)

export default SocialLinks
