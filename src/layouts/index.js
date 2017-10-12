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
        { name: 'description', content: "Barrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself." },
        // Schema.org
        { itemprop: "name", content: "Barrier & Co."},
        { itemprop: "description", content: "Barrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself."},
        { itemprop: "image", content: "http://barrierandco.com/static/meta-image.png"},
        // Twitter
        { name: "twitter:card", content: "summary_large_image"},
        { name: "twitter:title", content: "Barrier & Co."},
        { name: "twitter:description", content: "Barrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself."},
        { name: "twitter:creator", content: "@jhnwlsn"},
        { name: "twitter:image:src", content: "http://barrierandco.com/static/meta-image.png"},
        // Open Graph
        { property: "og:title", content: "Barrier & Co."},
        { property: "og:type", content: ""},
        { property: "og:url", content: "http://barrierandco.com"},
        { property: "og:image", content: "http://barrierandco.com/static/meta-image.png"},
        { property: "og:description", content: "arrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself."},
        { property: "og:site_name", content: "Barrier & Co."}
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