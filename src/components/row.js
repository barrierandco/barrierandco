import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RowStyle = styled.div`
  background: pink;
  .inner {
    margin: 0 auto;
    max-width: 990px;
    padding: 0 20px;
  }
`

class Row extends React.Component {
  render() {
    return (
      <RowStyle>
        <div className="inner">
          {this.props.children}
        </div>
      </RowStyle>
    )
  }
}

export default Row