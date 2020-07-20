import React, { useState, useCallback } from 'react'

import Logo from './Logo'
import Links from './Links'
import SocialLinks from './SocialLinks'

import './navbar.scss'

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setMobileMenuOpen(prev => !prev), [setMobileMenuOpen])
  return (
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
          <div className="navbar-brand">
            <a role="button" onClick={toggleMenu} className={`navbar-burger burger ${mobileMenuOpen ? "is-active" : ""}`} data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navMenu" className={`navbar-menu ${mobileMenuOpen ? "is-active" : ""}`}>
            <div className="columns is-gapless is-vcentered is-full-width has-text-centered">
              <Links linkClassName="navbar-item" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
