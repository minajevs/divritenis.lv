import React from 'react'
import github from '../../img/github-icon.svg'

import Logo from './Logo'
import Links from './Links'

import SocialLinks from './SocialLinks'

const Navbar: React.FC = () => (
  <>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Logo />
        </div>
        <div className="navbar-end">
          <Links />
        </div>
      </div>
    </nav>

    <div className="columns header-row">
      <div className="container">
        <div className="column is-one-third is-offset-two-thirds">
          <div className="columns is-vcentered has-text-centered">
            <div className="column">
              Meklesana
                </div>
            <div className="column">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Navbar
