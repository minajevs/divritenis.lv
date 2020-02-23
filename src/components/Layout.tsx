import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import './all.sass'

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet title="Divritenis.lv" />
    <Navbar />
    <div className="container">
      {children}
    </div>
  </>
)

export default Layout
