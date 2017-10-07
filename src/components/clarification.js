import React from 'react'
import styled from 'styled-components'

import Cell from './cell'

const ClarificationContainer = styled.div`
  margin-top: 40px;
  @media ${props => props.theme.breakpoint} {
    margin-top: 200px;
  }
`

const Clarification = props =>
  <ClarificationContainer>
    <Cell>
      <h2>Still not sure? Let me help by clarifying some things...</h2>
      <ul>
        <li>If you are looking for a project to be done yesterday, then I’m probably not your guy.</li>
        <li>If your project is simply patching up some leaks, there a good change I won’t be able to really help you overcome your specific roadblocks.</li>
        <li>If you don’t care for the latest technologies and making a site that’s performant and designed for the end user, then I don’t want to waste your money.</li>
      </ul>
      <strong>Otherwise… let’s get to work overcoming your roadblocks and making your dreams become a reality.</strong>
    </Cell>
  </ClarificationContainer>

export default Clarification