import React from 'react'
import Link from 'gatsby-link'

import Cell from '../components/cell'
import Logo from '../components/logo'
import Row from '../components/row'

const IndexPage = () => (
  <Row>
    <Logo />
    <Cell center>
      <h1>Your business is more than simply a playground for your next hobby—it’s where your biggest and greatest ideas that will change the world are coming into focus.</h1>
      <p>Finding and trusting a designer or developer to create your MVP and make updates to your product or website isn’t an easy task and shouldn’t be taken lightly. This is your livelyhood we’re talking about here.</p>
    </Cell>
  </Row>
)

export default IndexPage
