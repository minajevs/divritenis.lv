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
  <Link to="/">
    <Image src={logo} alt="LRA" />
  </Link>
)

export default Logo
