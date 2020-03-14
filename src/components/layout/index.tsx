import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './Footer'
import '../all.scss'

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet title="Divritenis.lv" />
    <Navbar />
    <div className="container">
      {children}
    </div>
    <Footer />
  </>
)

export default Layout
