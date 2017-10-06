import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.div`
  color: ${props => props.inverted ? 'white' : props.theme.colors.red};
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: ${props => props.inverted ? '32px' : '48px'};
  text-align: center;
`

const Logo = props => (
  <LogoStyle inverted={props.inverted}>
    Barrier &amp; Co.
  </LogoStyle>
)

export default Logo