import React from 'react'
import styled from 'styled-components'

import LogoImage from '../assets/images/logo.svg'

const LogoIcon = styled.img`
  display: block;
  height: auto;
  margin: 0 0 8px;
  width: 64px;
  @media ${props => props.theme.breakpoint} {
    margin: 0 auto 8px;
    width: 80px;
  }
`

const LogoStyle = styled.div`
  color: ${props => props.inverted ? 'white' : props.theme.colors.red};
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 16px;
  @media ${props => props.theme.breakpoint} {
    margin-bottom: ${props => props.inverted ? '32px' : '48px'};
    text-align: center;
  }
`

const Logo = props => (
  <LogoStyle inverted={props.inverted}>
    { !props.inverted && <LogoIcon src={LogoImage} /> }
    Barrier &amp; Co.
  </LogoStyle>
)

export default Logo