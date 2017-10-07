import React from 'react'
import styled from 'styled-components'

import settings from '../lib/settings'

const ButtonIcon = styled.svg`
  fill: ${props => props.inverted ? settings.colors.black : 'white'};
  height: 20px;
  margin-right: 8px;
  width: 20px;
`

const ButtonStyles = styled.a`
  align-items: center;
  background: ${props => props.inverted ? 'white' : props.dribbble ? settings.colors.pink : settings.colors.blue};
  border-radius: 4px;
  color: ${props => props.inverted ? settings.colors.black : 'white'};
  display: inline-flex;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
  justify-content: center;
  margin-bottom: ${props => props.inverted ? '0' : '24px'};
  padding: 14px 32px;
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
        {this.props.icon &&
          <ButtonIcon {...this.props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`#${this.props.icon}`} />
          </ButtonIcon>
        }
        {this.props.children}
      </ButtonStyles>
    )
  }
}

export default Button