import React from 'react'
import styled from 'styled-components'
import fitbot from '../assets/images/proof-fitbot.png'
import mideo from '../assets/images/proof-mideo.png'

import Button from './button'
import Cell from './cell'

const ProofContainer = styled.div`
  margin: 40px 0 0;
  @media ${props => props.theme.breakpoint} {
    margin: 176px 0 40px;
  }
`

const ProofDribbble = styled.div`
  margin-top: 24px;
  text-align: center;
  @media ${props => props.theme.breakpoint} {
    margin-top: 40px;
  }
`

const ProofImage = styled.figure`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  margin: 24px 0;
  overflow: hidden;
  position: relative;
  @media ${props => props.theme.breakpoint} {
    box-shadow: none;
    float: left;
    margin: ${props => props.left ? '40px -10% 0 0' : '120px 0 0 0'};
    overflow: visible;
    width: 55%;
  }
  &:hover {
    z-index: 10;
  }
  a {
    color: inherit;
  }
  figcaption {
    background: white;
    padding: 16px 24px;
    @media ${props => props.theme.breakpoint} {
      background: none;
      margin-top: 16px;
      padding: 0;
      width: ${props => props.left ? '75%' : '100%'};
    }
  }
  img {
    display: block;
    width: 100%;
    @media ${props => props.theme.breakpoint} {
      border-radius: ${props => props.theme.borderRadius};
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
  p {
    line-height: 1.1;
    margin-bottom: 0;
  }
  small {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 0.85rem;
    opacity: 0.6;
    @media ${props => props.theme.breakpoint} {
      font-size: 0.6rem;
    }
  }
  strong {
    display: block;
    line-height: 1;
    margin-bottom: 8px;
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
      <h2>Need proof of completed projects, not&nbsp;just&nbsp;blueprints?</h2>
      <p>Having completed over three dozen individual projects, I’ve experienced a wide array of project types, styles and purposes. Here are some samples of the work I am most proud to show you. <strong>A personal goal of mine is to do my job so well that I put myself out of business.</strong> This means that I want to get you set up so that you can hire your own team and continue growing without needing to keep expensive consultancies on retainer as your dream&nbsp;becomes&nbsp;reality.</p>
    </Cell>
    <ProofGallery>
      <ProofImage left>
        <img src={fitbot} />
        <figcaption>
          <p>
            <strong>Fitbot iOS App</strong>
            <small><a href="https://thefitbot.com">Fitbot</a> needed a better way for clients to communicate with their coaches. To resolve this roadblock, I designed an iOS app that prioritized communication throughout the entire experience.</small>
          </p>
        </figcaption>
      </ProofImage>
      <ProofImage right>
        <img src={mideo} />
        <figcaption>
          <p>
            <strong>Mideo Web Application</strong>
            <small>Using React, Redux and Google's Firebase, I designed and developed the entire applicatino for Mideo which allows filmmakers to sample an entire library of songs on their videos <em>before purchasing the songs</em>.</small>
          </p>
        </figcaption>
      </ProofImage>
    </ProofGallery>
    <ProofDribbble>
      <Button href="https://dribbble.com/jhnwlsn" icon="dribbble" dribbble>See more on Dribbble</Button>
    </ProofDribbble>
  </ProofContainer>

export default Proof