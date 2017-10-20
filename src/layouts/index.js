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
    <Helmet>
      <title>Barrier &amp; Co</title>
      <meta name='description' content="Barrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself."  />
      <meta itemprop="name" content="Barrier & Co." />
      <meta itemprop="description" content="Barrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself." />
      <meta itemprop="image" content="http://barrierandco.com/static/meta-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Barrier & Co." />
      <meta name="twitter:description" content="Barrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself." />
      <meta name="twitter:creator" content="@jhnwlsn" />
      <meta name="twitter:image:src" content="http://barrierandco.com/static/meta-image.png" />
      <meta property="og:title" content="Barrier & Co." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://barrierandco.com" />
      <meta property="og:image" content="http://barrierandco.com/static/meta-image.png" />
      <meta property="og:image:height" content="150" />
      <meta property="og:image:width" content="280" />
      <meta property="og:description" content="Barrier & Company exists to create a solution for some of today's greatest technological problems so that other people can enjoy the fullness of life itself." />
      <meta property="og:site_name" content="Barrier & Co." />      
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3980674.js"></script>
      <script type="text/javascript">{`
        !function() {
          var t;
          if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0, 
          t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
          t.factory = function(e) {
            return function() {
              var n;
              return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e, n, o, i;
            e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"), 
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js", 
            n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
          });
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('vtkuwry32ttp');
      `}</script>
    </Helmet>
    <ThemeProvider theme={settings}>
      {children()}
    </ThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper