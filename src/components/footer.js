import React from 'react'
import styled from 'styled-components'

import Logo from './logo'

const FooterContainer = styled.footer`
  color: white;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
  margin: 80px auto 24px;
  max-width: 990px;
  text-align: center;
  @media ${props => props.theme.breakpoint} {
    margin: 280px auto 56px;
  }
  small {
    opacity: 0.5;
  }
`

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0 0 40px;
  padding: 0;
  a {
    color: white;
  }
  li {
    display: inline-block;
    margin: 0 16px;
    padding: 0;
  }
`

const Footer = props =>
  <FooterContainer>
    <Logo inverted />
    <FooterLinks>
      <li><a href="https://dribbble.com/barrierandco">Dribbble</a></li>
      <li><a href="https://medium.com/barrierandco">Medium</a></li>
      <li><a href="#">Contact</a></li>
    </FooterLinks>
    <small>&copy; 2017 John Wilson. All rights reserved.</small>
  </FooterContainer>

export default Footer