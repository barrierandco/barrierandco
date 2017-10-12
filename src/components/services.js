import React from 'react'
import styled from 'styled-components'

import frontend from '../assets/images/service-frontend.svg'
import management from '../assets/images/service-management.svg'
import uxui from '../assets/images/service-uxui.svg'

const ServicesCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  flex-grow: ${props => props.left || props.right ? '0' : '1'};
  margin-bottom: 24px;
  order: ${props => props.left || props.right ? '1' : '0'};
  overflow: hidden;
  position: relative;
  @media ${props => props.theme.breakpoint} {
    margin: ${props => props.left ? '80px -16px 0 0' : props.right ? '136px 0 0 -16px' : '0 -8px'};
    order: 0;
    width: 100%;
    z-index: ${props => props.left || props.right ? '0' : '10'};
  }
  img {
    display: block;
    height: auto;
    width: 100%;
  }
  li {
    margin-bottom: 4px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  p {
    margin: 0;
    @media ${props => props.theme.breakpoint} {
      font-size: 0.785rem;
    }
  }
  ul {
    margin: 8px 0 0;
    @media ${props => props.theme.breakpoint} {
      font-size: 0.785rem;
    }
  }
  .inner {
    padding: 24px;
    @media ${props => props.theme.breakpoint} {
      padding: ${props => props.left ? '32px 56px 40px 40px' : props.right ? '32px 40px 40px 56px' : '32px 40px 40px'};
    }
  }
`

const ServicesContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  margin: 40px 0;
  @media ${props => props.theme.breakpoint} {
    flex-direction: row;
  }
`

const Services = props => 
  <ServicesContainer>
    <ServicesCard left>
      <img src={frontend} alt="an absract illustrated image representing front-end development" />
      <div className="inner">
        <h3>Web&nbsp;Development</h3>
        <p>Bringing your dream to reality requires a practical implementation knowledge. Having extensive experience with both front-end and back-end systems, I'm ready to help your business succeed by providing the&nbsp;following&nbsp;services:</p>
        <ul>
          <li><strong>HTML, CSS &amp; Javascript</strong></li>
          <li><strong>Sinatra &amp; Ruby&nbsp;on&nbsp;Rails</strong></li>
          <li><strong>React &amp; Redux</strong></li>
          <li><strong>Google's&nbsp;Firebase</strong></li>
        </ul>
      </div>
    </ServicesCard>
    <ServicesCard>
      <img src={uxui} alt="an absract illustrated image representing user experience and user interface design" />
      <div className="inner">
        <h3>UX/UI&nbsp;Design</h3>
        <p>Creating a solution for your roadblock requires someone like me who can look towards where you want to go while at the same time keeping an eye on where you are currently. This is done specifically through the following&nbsp;design&nbsp;services:</p>
        <ul>
          <li><strong>Information architecture&nbsp;&amp; wireframes</strong></li>
          <li><strong>Interactive prototyping</strong></li>
          <li><strong>High fidelity mockups</strong></li>
        </ul>
      </div>
    </ServicesCard>
    <ServicesCard right>
      <img src={management} alt="an absract illustrated image representing product management" />
      <div className="inner">
        <h3>Product&nbsp;Management</h3>
        <p>Some projects need a leader who is aware of every detail of a project and can take a team from concept to reality. While I am effective at doing everything myself, I'm also capable of reaching out to my network to <strong>form and lead a team through the entire product development process</strong>. Doing so helps you with the larger projects that need more power than a single person contracted even fulltime&nbsp;can&nbsp;provide.</p>
      </div>
    </ServicesCard>
  </ServicesContainer>

export default Services