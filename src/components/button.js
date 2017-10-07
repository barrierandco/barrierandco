import React from 'react'
import styled from 'styled-components'

import settings from '../lib/settings'

const ButtonStyles = styled.a`
  background: ${settings.colors.blue};
  border-radius: 4px;
  color: white;
  display: inline-block;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
  margin-bottom: 24px;
  padding: 14px 32px;
  text-align: center;
  text-decoration: none;
  @media ${settings.breakpoint} {
    font-size: 0.875rem;
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