import React from 'react'

import Logo from './Logo'
import Links from './Links'
import SocialLinks from './SocialLinks'

import './navbar.scss'

const Navbar: React.FC = () => (
  <>
    <nav role="header" aria-label="header row" className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Logo />
        </div>
        <div className="navbar-end">
          <SocialLinks />
        </div>
      </div>
    </nav>

    <nav role="navigation" aria-label="main navigation" className="navbar is-transparent row">
      <div className="container">
        <div className="navbar-menu">
          <div className="columns is-gapless is-vcentered is-full-width has-text-centered">
            <Links linkClassName="navbar-item" />
          </div>
        </div>
      </div>
    </nav>
  </>
)

export default Navbar
