import React, { useState, Fragment, useEffect } from 'react'
import Helmet from 'react-helmet'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import Navbar from './navbar'
import Footer from './Footer'
import Breadcrumbs, { PageKeys } from './breadcrumbs'

import '../all.scss'

type Props = {
  breadcrumbs?: PageKeys
}

const Layout: React.FC<Props> = ({ breadcrumbs, children }) => {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
        language="lv"
      >
        <Helmet title="Divritenis.lv" />
        <Navbar />
        <div className="section">
          <Breadcrumbs pageKeys={breadcrumbs ?? []} />
          <div className="container">{children}</div>
        </div>
        <Footer />
      </GoogleReCaptchaProvider>
    </>
  )
}
export default Layout
