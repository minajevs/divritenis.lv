import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './navbar'
import './all.sass'

const TemplateWrapper: React.FC = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
