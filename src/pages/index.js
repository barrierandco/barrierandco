import React from 'react'
import Link from 'gatsby-link'

import Cell from '../components/cell'
import Letter from '../components/letter'
import Logo from '../components/logo'
import Row from '../components/row'

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
    </Row>
  </div>

export default IndexPage
