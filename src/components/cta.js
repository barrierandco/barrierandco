import React from 'react'
import styled from 'styled-components'

import Button from './button'

const CtaCell = styled.div`
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 5px;
  flex-shrink: 0;
  line-height: 1.3;
  margin: ${props => props.expanded ? '0 0 0 40px' : '0 auto'};
  max-width: 432px;
  padding: 40px;
  text-align: center;
  hr {
    border: none;
    border-top: 1px solid ${props => props.theme.colors.light};
    margin: 8px 0 32px;
  }
  p {
    font-size: 0.875rem;
    margin-bottom: 0;
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
  flex-flow: row nowrap;
  margin: 80px 0 -296px;
  padding: 56px;
  position: relative;
  z-index: 10;
`

class CallToAction extends React.Component {
  render() {
    return (
      <CtaContainer>
        { this.props.expanded &&
          <div>
            <h2>Get a free 15 minute consultation</h2>
            <p>Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          </div>
        }
        <CtaCell expanded={this.props.expanded}>
          <strong>Schedule a FREE 15 minute consultation time directly into my calendar.</strong>
          <Button href="https://calendly.com/jhnwlsn/15min" target="_blank">Schedule a Consultation</Button>
          <hr />
          <p>Rather just write to me? Shoot me an email anytime at <a href="mailto:john@barrierandco.com">john@barrierandco.com</a></p>
        </CtaCell>
      </CtaContainer>
    )
  }
}

export default CallToAction