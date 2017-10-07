import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import Icons from '../assets/images/icons'
import settings from '../lib/settings'
import './reset.css'
import './base.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <span style={{display: "none"}}><Icons /></span>
    <Helmet
      title="Barrier &amp; Co."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ThemeProvider theme={settings}>
      {children()}
    </ThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
