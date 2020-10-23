import React, { useState, useCallback } from 'react'

import Logo from './Logo'
import Links from './Links'
import SocialLinks from './SocialLinks'

import './navbar.scss'

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), [
    setMobileMenuOpen,
  ])
  return (
    <>
      <nav
        role="header"
        aria-label="header row"
        className="navbar is-transparent is-hidden-mobile"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Logo />
            </div>
          </div>
          <div className="navbar-item">
            <SocialLinks />
          </div>
        </div>
      </nav>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="navbar is-transparent row"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item is-hidden-tablet">
              <Logo />
            </div>
            <a
              role="button"
              onClick={toggleMenu}
              className={`navbar-burger burger ${
                mobileMenuOpen ? 'is-active' : ''
              }`}
              data-target="navMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${mobileMenuOpen ? 'is-active' : ''}`}
          >
            <div className="columns is-gapless is-vcentered is-full-width has-text-centered">
              <Links linkClassName="navbar-item" />
              <div className="navbar-item is-hidden-tablet">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
