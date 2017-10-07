import React from 'react'
import styled from 'styled-components'

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
  @media ${props => props.theme.breakpoint} {
    margin: 80px 0 -296px;
    padding: 56px;
  }
`

class Download extends React.Component {
  render() {
    return (
      <DownloadContainer>
        <h2>Identify Your Roadblocks</h2>
        <p>Sometimes we feel stuck, and we don’t know why. If you currently feel that way, I’d love to help you out—no strings attached. Identifying at least one roadblock and the solution will start forward motion, and before you know it you’ll be running full steam ahead once again. To help you identify the roadblocks, here’s a simple one page PDF that will help you think through where you are now and where you want to go.</p>
        <Button href="#" inverted>Download the PDF</Button>
      </DownloadContainer>
    )
  }
}

export default Download