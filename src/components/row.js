import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RowStyle = styled.div`
  background: linear-gradient(to bottom, white, #f2f2f2);
  padding: 100px 20px;
  .inner {
    margin: 0 auto;
    max-width: 990px;
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