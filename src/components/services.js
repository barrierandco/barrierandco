import React from 'react'
import styled from 'styled-components'

const ServicesCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  flex-grow: ${props => props.left || props.right ? '0' : '1'};
  margin: ${props => props.left ? '80px -16px 0 0' : props.right ? '136px 0 0 -16px' : '0 -8px'};
  padding: ${props => props.left ? '40px 56px 40px 40px' : props.right ? '40px 40px 40px 56px' : '40px'};
  position: relative;
  width: 100%;
  z-index: ${props => props.left || props.right ? '0' : '10'};
  img {
    margin-bottom: 16px;
  }
  p {
    font-size: 0.785rem;
    margin: 0;
  }
`

const ServicesContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row nowrap;
  margin: 80px 0 40px;
`

const Services = props => 
  <ServicesContainer>
    <ServicesCard left>
      <img src="/images/service-frontend.svg" />
      <h3>Front-end Development</h3>
      <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
    </ServicesCard>
    <ServicesCard>
      <img src="/images/service-uxui.svg" />
      <h3>UX/UI Design</h3>
      <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
    </ServicesCard>
    <ServicesCard right>
      <img src="/images/service-management.svg" />
      <h3>Project Management</h3>
      <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
    </ServicesCard>
  </ServicesContainer>

export default Services