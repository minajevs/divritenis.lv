import React, { useState, Fragment, useEffect } from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './Footer'
import '../all.scss'
import Breadcrumbs from './breadcrumbs'
import { BreadcrumbsProvider } from '../../utils/useBreadcrumbs'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <BreadcrumbsProvider>
        <Helmet title="Divritenis.lv" />
        <Navbar />
        <Breadcrumbs />
        <div className="container">
          {children}
        </div>
        <Footer />
      </BreadcrumbsProvider>
    </>
  )
}
export default Layout
