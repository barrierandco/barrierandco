import React from 'react'
import styled from 'styled-components'
import profile from '../assets/images/nick-profile.jpg'

const QuoteCitation = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
  height: 56px;
  @media ${props => props.theme.breakpoint} {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
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
  border-top: 1px solid ${props => props.theme.colors.light};
  margin: 16px auto;
  padding: 40px 0 0;
  @media ${props => props.theme.breakpoint} {
    padding: 56px 96px 0;
    text-align: center;
  }
`

const QuotePicture = styled.img`
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 15px 35px 0;
  margin-right: 16px;
  width: 56px;
  @media ${props => props.theme.breakpoint} {
    margin: 0 0 16px;
    transform: scale(-1, 1);
    width: 80px;
  }
`

const Quote = props =>
  <div>
    <QuoteContent>
      <p>A successful project relies on translating goals to pixels and a regimented process, and that’s what puts John in his own league. Trustworthy, affable, and relentless in his pursuit of the right solution, John will wind up caring just as much about your project as&nbsp;you&nbsp;do.</p>
      <p>Toss anything at him: his insight into the development process heads off problems before they happen, keeping everything on time, on budget, and on scope. With John, you’ve finally found the&nbsp;right&nbsp;fit.</p>
    </QuoteContent>
    <QuoteCitation>
      <QuotePicture src={profile} />
      <div>
        <strong>Nick&nbsp;Walsh</strong>
        <small>Envy&nbsp;Labs, COO and Design&nbsp;Director</small>
      </div>
    </QuoteCitation>
  </div>

export default Quote