import React, { useState, Fragment, useEffect } from 'react'
import Helmet from 'react-helmet'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import Navbar from './navbar'
import Footer from './Footer'
import Breadcrumbs, { PageKey } from './breadcrumbs'

import '../all.scss'

type Props = {
  breadcrumbs?: PageKey[]
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
        <Breadcrumbs pageKeys={breadcrumbs ?? []} />
        <div className="container">
          {children}
        </div>
        <Footer />
      </GoogleReCaptchaProvider>
    </>
  )
}
export default Layout
