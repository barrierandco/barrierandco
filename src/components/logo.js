import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.div`
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 48px;
  text-align: center;
`

const Logo = () => (
  <LogoStyle>
    Barrier &amp; Co.
  </LogoStyle>
)

export default Logo