import React from 'react'
import styled from 'styled-components'

import PDF from '../assets/downloads/define-your-roadblocks-2017.pdf'

import Button from './button'

const DownloadContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.yellow};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  margin: 56px 0 -80px;
  padding: 32px;
  position: relative;
  z-index: 10;
  h2 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 24px;
  }
  @media ${props => props.theme.breakpoint} {
    margin: 80px 0 -296px;
    padding: 56px;
  }
`

class Download extends React.Component {
  render() {
    return (
      <DownloadContainer>
        <h2>Define Your Roadblocks</h2>
        <p>Defining a roadblock is more than simply knowing what’s keeping you from moving forward with your dream. To define every aspect of your roadblock and what you want the future to look like is the key to unlocking the solution and moving your company forward once again. I’d love to help you fully define your roadblock—no strings attached—so that you can continue to move your&nbsp;business&nbsp;forward.</p>
        <Button href={PDF} icon="download" inverted>Download the PDF</Button>
      </DownloadContainer>
    )
  }
}

export default Download