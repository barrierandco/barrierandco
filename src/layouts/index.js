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


<!-- Twitter summary card with large image must be at least 280x150px -->
<meta name="twitter:image:src" content="http://www.example.com/image.jpg">

<!-- Open Graph data -->
<meta property="og:title" content="Title Here" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.example.com/" />
<meta property="og:image" content="http://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name, i.e. Moz" />
<meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
<meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
<meta property="article:section" content="Article Section" />
<meta property="article:tag" content="Article Tag" />
<meta property="fb:admins" content="Facebook numberic ID" />