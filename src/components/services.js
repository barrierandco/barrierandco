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
  p {
    margin: 0;
    @media ${props => props.theme.breakpoint} {
      font-size: 0.785rem;
    }
  }
  .inner {
    padding: 24px;
    @media ${props => props.theme.breakpoint} {
      padding: ${props => props.left ? '40px 56px 40px 40px' : props.right ? '40px 40px 40px 56px' : '40px'};
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
    margin: 80px 0 40px;
  }
`

const Services = props => 
  <ServicesContainer>
    <ServicesCard left>
      <img src="https://unsplash.it/800/600" />
      <div className="inner">
        <h3>Front-end Development</h3>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </div>
    </ServicesCard>
    <ServicesCard>
      <img src="https://unsplash.it/800/600" />
      <div className="inner">
        <h3>UX/UI Design</h3>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </div>
    </ServicesCard>
    <ServicesCard right>
      <img src="https://unsplash.it/800/600" />
      <div className="inner">
        <h3>Project Management</h3>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </div>
    </ServicesCard>
  </ServicesContainer>

export default Services