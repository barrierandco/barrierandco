import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import CallToAction from '../components/cta'
import Cell from '../components/cell'
import Footer from '../components/footer'
import Letter from '../components/letter'
import Logo from '../components/logo'
import Objections from '../components/objections'
import Proof from '../components/proof'
import Quote from '../components/quote'
import Row from '../components/row'
import Services from '../components/services'

const Illustration = styled.img`
  margin: 24px 0 80px;
`

const IndexPage = props =>
  <div>
    <Row>
      <Logo />
      <Cell center>
        <h1>Your business is more than simply a playground for your next hobby—it’s where your biggest and greatest ideas that will change the world are coming into focus.</h1>
        <p>Finding and trusting a designer or developer to create your MVP and make updates to your product or website isn’t an easy task and shouldn’t be taken lightly. This is your livelyhood we’re talking about here.</p>
      </Cell>
      <Letter />
    </Row>
    <Row>
      <Cell>
        <h2>Here’s how I can help you...</h2>
        <p>Your business’s roadblocks could be anything from simply struggling to find the ideal designer for your MVP to hitting a major issue with React. <strong>I consider whatever is keeping you from making your dreams become reality a “roadblock.”</strong> Once I’m able to understand what you need in order to overcome that roadblock, I’ll be able to show you step by step how we can solve it together using:</p>
      </Cell>
      <Services />
      <Objections />
      <CallToAction />
    </Row>
    <Row>
      <Proof />
      <Cell>
        <Quote />
      </Cell>
      <CallToAction expanded />
    </Row>
    <Row>
      <Cell>
        <h2 style={{marginTop: "200px"}}>Still not sure? Let me help by clarifying some things...</h2>
        <ul>
          <li>If you are looking for a project to be done yesterday, then I’m probably not your guy.</li>
          <li>If your project is simply patching up some leaks, there a good change I won’t be able to really help you overcome your specific roadblocks.</li>
          <li>If you don’t care for the latest technologies and making a site that’s performant and designed for the end user, then I don’t want to waste your money.</li>
        </ul>
        <strong>Otherwise… let’s get to work overcoming your roadblocks and making your dreams become a reality.</strong>
      </Cell>
      <CallToAction expanded />
    </Row>
    <Footer />
  </div>

export default IndexPage
