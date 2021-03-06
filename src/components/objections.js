import React from 'react'
import styled from 'styled-components'
import logos from '../assets/images/service-logos.svg';

const ObjectionsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 40px;
  @media ${props => props.theme.breakpoint} {
    flex-direction: row;
    margin-top: 80px;
  }
  .column {
    width: 100%;
    &:first-of-type {
      margin-bottom: 24px;
      margin-right: 40px;
      @media ${props => props.theme.breakpoint} {
        margin-bottom: 0;
      }
    }
  }
`

const Objections = props =>
  <div>
    <ObjectionsContainer>
      <div className="column">
        <h2>Why should you&nbsp;trust&nbsp;me?</h2>
        <p>Since 2009, I’ve had experience working with large brands such as Cisco, Booz Allen Hamilton and dozens of other startups. Having come through a more traditional design training and now focusing on web technologies, I have a wide range of experiences that all tie together to create a keen eye for the macro and micro scopes of&nbsp;each&nbsp;project.</p>
      </div>
      <div className="column">
        <h2>Can I <em>really</em> help&nbsp;you&nbsp;out?</h2>
        <p>I'm positive that I can, but let me put it this way… if we chat and I’m not certain that your investment will make a profitable return, or I’m not capable of helping you out, I’ll let you know up front. There’s no point in wasting either of our time or your money. In other words, I’ll only help you out if I’m certain that there is a chance for a&nbsp;positive&nbsp;result.</p>
      </div>
    </ObjectionsContainer>
  </div>

export default Objections