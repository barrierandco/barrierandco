import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CellStyle = styled.div`
  margin: 0 auto;
  max-width: 700px;
  text-align: ${props => props.center ? 'center' : 'left'};
`

class Cell extends React.Component {
  render() {
    return (
      <CellStyle center={this.props.center}>
        {this.props.children}
      </CellStyle>
    )
  }
}

export default Cell