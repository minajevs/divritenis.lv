import React, { useState, Fragment, useEffect } from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import Footer from './Footer'
import '../all.scss'
import Breadcrumbs, { PageKey } from './breadcrumbs'

type Props = {
  breadcrumbs?: PageKey[]
}

const Layout: React.FC<Props> = ({ breadcrumbs, children }) => {
  return (
    <>
      <Helmet title="Divritenis.lv" />
      <Navbar />
      <Breadcrumbs pageKeys={breadcrumbs ?? []} />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}
export default Layout
