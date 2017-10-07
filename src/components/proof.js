import React from 'react'
import styled from 'styled-components'
import fitbot from '../assets/images/proof-fitbot.png'
import mideo from '../assets/images/proof-mideo.png'

import Cell from './cell'

const ProofContainer = styled.div`
  margin: 176px 0 80px;
`

const ProofImage = styled.figure`
  float: left;
  margin: ${props => props.left ? '40px -10% 0 0' : '120px 0 0 0'};
  position: relative;
  width: 55%;
  &:hover {
    z-index: 10;
  }
  a {
    color: inherit;
  }
  figcaption {
    margin-top: 16px;
  }
  img {
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    display: block;
    width: 100%;
  }
  p {
    margin-bottom: 8px;
  }
  small {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 0.6rem;
    opacity: 0.5;
  }
  strong {
    display: block;
    line-height: 1;
  }
`

const ProofGallery = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`

const Proof = props =>
  <ProofContainer>
    <Cell>
      <h2>Need proof of completed projects, not just blueprints?</h2>
      <p>Having completed over 30 individual client’s projects, I’ve experienced a wide array of project types, styles and purposes. Here are some samples of the work I am most proud to show you. <strong>A personal goal of mine is to do my job so well that I put myself out of business.</strong> This means that I want to get you set up so that you can hire your own team and continue growing without needing to keep expensive consultancies on retainer as your dream becomes reality.</p>
    </Cell>
    <ProofGallery>
      <ProofImage left>
        <img src={fitbot} />
        <figcaption>
          <p>
            <strong>John Wilson</strong>
            <small>Designer & Developer • Principle of Barrier & Co.</small>
          </p>
        </figcaption>
      </ProofImage>
      <ProofImage right>
        <img src={mideo} />
        <figcaption>
          <p>
            <strong>John Wilson</strong>
            <small>Designer & Developer • Principle of Barrier & Co.</small>
          </p>
        </figcaption>
      </ProofImage>
    </ProofGallery>
  </ProofContainer>

export default Proof