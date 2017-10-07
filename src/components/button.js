import React from 'react'
import styled from 'styled-components'

import settings from '../lib/settings'

const ButtonStyles = styled.a`
  background: ${props => props.inverted ? 'white' : props.dribbble ? settings.colors.pink : settings.colors.blue};
  border-radius: 4px;
  color: ${props => props.inverted ? settings.colors.black : 'white'};
  display: inline-block;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
  margin-bottom: ${props => props.inverted ? '0' : '24px'};
  padding: 14px 32px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  @media ${settings.breakpoint} {
    font-size: 0.875rem;
    padding: ${props => props.dribbble ? '14px 48px' : '14px 32px'};
    width: auto;
  }
`

class Button extends React.Component {
  render() {
    return (
      <ButtonStyles {...this.props}>
        {this.props.children}
      </ButtonStyles>
    )
  }
}

export default Button