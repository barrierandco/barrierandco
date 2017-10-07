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

const ObjectionsLogos = styled.img`
  display: block;
  height: auto;
  margin: 24px auto 0;
  max-width: 650px;
  width: 100%;
  @media ${props => props.theme.breakpoint} {
    margin: 48px auto 0;
  }
`

const Objections = props =>
  <div>
    <ObjectionsContainer>
      <div className="column">
        <h2>Why should you trust me?</h2>
        <p>Over the past 8 years, I’ve had experience working with large brands such as Cisco, Booz Allen Hamilton, Grooveshark, Cross Browser Testing and dozens of other startups. Having come through a more traditional design training and now focusing on web technologies, I have a wide range of experiences that all tie together to create a keen eye for the macro- and micro-scope of each project.</p>
      </div>
      <div className="column">
        <h2>Can I <em>really</em> help you out?</h2>
        <p>I'm positive that I can, but let me put it this way… if we chat and I’m not certain that your investment will make a profitable return, or I’m not capable of helping you out, I’ll let you know up front. There’s no point in wasting either of our time and your money. In other words, I’ll only help you out if I’m certain that there is a chance for a positive result.</p>
      </div>
    </ObjectionsContainer>
    <ObjectionsLogos src={logos} />
  </div>

export default Objections