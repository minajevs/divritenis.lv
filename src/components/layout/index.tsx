import React, { useState, Fragment, useEffect } from 'react'
import Helmet from 'react-helmet'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import Navbar from './navbar'
import Footer from './Footer'
import Breadcrumbs, { PageKeys } from './breadcrumbs'

import '../all.scss'

type Props = {
  title?: string | null
  breadcrumbs?: PageKeys
}

const siteName = 'Divritenis.lv'

const Layout: React.FC<Props> = ({ breadcrumbs, title, children }) => {
  const siteTitle =
    title === undefined || title === null ? siteName : `${siteName} | ${title}`
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
        language="lv"
      >
        <Helmet title={siteTitle} />
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
