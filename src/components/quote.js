import React from 'react'
import styled from 'styled-components'
import profile from '../assets/images/nick-profile.jpg'

const QuoteCitation = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
  height: 80px;
  small {
    margin: 0;
    opacity: 0.65;
  }
  strong {
    display: block;
    line-height: 1;
    margin: 0;
  }
`

const QuoteContent = styled.blockquote`
  margin-bottom: 32px;
`

const QuotePicture = styled.img`
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 15px 35px 0;
  margin-right: 16px;
  width: 80px;
`

const Quote = props =>
  <div>
    <QuoteContent>
      <p>A successful project relies on translating goals to pixels and a regimented process, and that’s what puts John in his own league. Trustworthy, affable, and relentless in his pursuit of the right solution, John will wind up caring just as much about your project as you do.</p>
      <p>Toss anything at him: his insight into the development process heads off problems before they happen, keeping everything on time, on budget, and on scope. With John, you’ve finally found the right fit.</p>
    </QuoteContent>
    <QuoteCitation>
      <QuotePicture src={profile} />
      <div>
        <strong>Nick Walsh</strong>
        <small>Envy Labs, COO and Design Director</small>
      </div>
    </QuoteCitation>
  </div>

export default Quote