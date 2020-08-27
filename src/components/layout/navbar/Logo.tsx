import React from 'react'
import { Link } from 'gatsby'

import Image from '../../common/Image'

import logo from '../../../img/logo.svg'

export type LogoBlock = {
	alt: string
	title: string
	caption: string
	link: string
	url: string
}

const Logo: React.FC = () => (
	<Link to="/" className="navbar-item is-full-width">
		<Image src={logo} alt="LRA" className="is-full-width" />
	</Link>
)

export default Logo
