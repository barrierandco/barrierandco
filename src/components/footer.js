import React from 'react'
import styled from 'styled-components'

import Logo from './logo'

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.black};
  padding: 80px 0 24px;
  @media ${props => props.theme.breakpoint} {
    padding: 280px 0 56px;
  }
  small {
    opacity: 0.5;
  }
  .inner {
    color: white;
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
    margin: 0 auto;
    max-width: 990px;
    text-align: center;
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
    <div className="inner">
      <Logo inverted />
      <FooterLinks>
        <li><a href="https://dribbble.com/barrierandco">Dribbble</a></li>
        <li><a href="https://medium.com/barrierandco">Medium</a></li>
        <li><a href="#">Contact</a></li>
      </FooterLinks>
      <small>&copy; 2017 John Wilson. All rights reserved.</small>
    </div>
  </FooterContainer>

export default Footer