import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import CallToAction from '../components/cta'
import Cell from '../components/cell'
import Clarification from '../components/clarification'
import Download from '../components/download'
import Footer from '../components/footer'
import Letter from '../components/letter'
import Logo from '../components/logo'
import Objections from '../components/objections'
import Proof from '../components/proof'
import Quote from '../components/quote'
import Row from '../components/row'
import Services from '../components/services'

const IndexPage = props =>
  <div>
    <Row>
      <Logo />
      <Cell center>
        <h1>Your business is more than simply a playground for your next hobby—it’s where your biggest and greatest ideas that will change the world are coming&nbsp;into&nbsp;focus.</h1>
        <p>Finding and trusting a designer or developer to create your MVP and make updates to your product or website isn’t an easy task and shouldn’t be taken lightly. This is your livelyhood we’re talking&nbsp;about&nbsp;here.</p>
      </Cell>
      <Letter />
    </Row>
    <Row>
      <Cell>
        <h2>Here’s how I can help&nbsp;you...</h2>
        <p>Your business’s roadblocks could be anything from simply struggling to find the ideal designer for your MVP to hitting a major issue with React. <strong>I consider whatever is keeping you from making your dreams become reality a “roadblock.”</strong> Once I’m able to understand what you need in order to overcome that roadblock, I’ll be able to show you step by step how we can solve it&nbsp;together&nbsp;using:</p>
      </Cell>
      <Services />
      <Objections />
      <CallToAction />
    </Row>
    <Row>
      <Proof />
      <Quote />
      <Download />
    </Row>
    <Row>
      <Clarification />
      <CallToAction expanded />
    </Row>
    <Footer />
  </div>

export default IndexPage
