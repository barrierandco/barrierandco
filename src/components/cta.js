import React from 'react'
import styled from 'styled-components'

import Button from './button'

const CtaCell = styled.div`
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 5px;
  line-height: 1.3;
  margin: ${props => props.expanded ? '16px 0 0' : '0'};
  max-width: 432px;
  padding: 24px;
  text-align: center;
  width: 100%;
  @media ${props => props.theme.breakpoint} {
    margin: ${props => props.expanded ? '0 0 0 40px' : '0 auto'};
    max-width: 432px;
    padding: 40px;
  }
  hr {
    border: none;
    border-top: 1px solid ${props => props.theme.colors.light};
    margin: 0 0 24px;
    @media ${props => props.theme.breakpoint} {
      margin: 8px 0 32px;
    }
  }
  p {
    margin-bottom: 0;
    @media ${props => props.theme.breakpoint} {
      font-size: 0.875rem;
    }
  }
  strong {
    display: block;
    margin-bottom: 16px;
  }
`

const CtaContainer = styled.div`
  align-items: center;
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  flex-flow: column nowrap;
  margin: 40px 0 -80px;
  padding: 32px;
  position: relative;
  z-index: 10;
  @media ${props => props.theme.breakpoint} {
    flex-direction: row;
    margin: 80px 0 -296px;
    padding: 56px;
  }
`

const CtaContent = styled.div`
  display: ${props => props.expanded ? 'block' : 'none'};
  margin-right: 40px;
  max-width: 450px;
`

class CallToAction extends React.Component {
  render() {
    return (
      <CtaContainer>
        <CtaContent expanded={this.props.expanded}>
          <h2>Get a free 15 minute consultation</h2>
          <p>I'm happy to hop on a call with anyone to discuss the details of your dreams, projects or ideas&mdash;at no charge to you. Simply book a time by filling out my quick contact form. Filling out the form will make our time on the call worth&nbsp;every&nbsp;minute.</p>
        </CtaContent>
        <CtaCell>
          <strong>Schedule my free 15 minute consultation.</strong>
          <Button href="http://bit.ly/2zTKehy" icon="date" target="_blank">Schedule a Consultation</Button>
          <hr />
          <p>Rather just write to me? Shoot me an email anytime at <a href="mailto:john@barrierandco.com">john@barrierandco.com</a></p>
        </CtaCell>
      </CtaContainer>
    )
  }
}

export default CallToAction