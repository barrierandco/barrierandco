import React from 'react'
import styled from 'styled-components'
import portrait from '../assets/images/jw-portrait.png'
import signature from '../assets/images/jw-signature.png'

const Container = styled.div`
  margin-top: 40px;
  @media ${props => props.theme.breakpoint} {
    margin-top: 80px;
  }
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`

const LetterContainer = styled.div`
  background: white;
  font-style: italic;
  margin: 0 -20px 0;
  padding: 20px;
  position: relative;
  z-index: 10;
  @media ${props => props.theme.breakpoint} {
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    float: right;
    margin: 80px 0 0;
    padding: 40px;
    width: 70%;
  }
  hr {
    border: none;
    border-top: 1px solid ${props => props.theme.colors.light};
    margin: 32px 0;
  }
  img {
    width: 110px;
  }
`

const LetterImage = styled.figure`
  display: block;
  margin: 0 0 -160px;
  @media ${props => props.theme.breakpoint} {
    float: left;
    margin: 0 -30% 0 0;
    width: 37.5%;
  }
  a {
    color: inherit;
  }
  figcaption {
    display: none;
    @media ${props => props.theme.breakpoint} {
      margin-top: 16px;
      display: block;
    }
  }
  img {
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
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

const Letter = props =>
  <Container>
    <LetterImage>
      <img src={portrait} alt="photo of John Wilson sitting in a chair with Lake Eola in the background" />
      <figcaption>
        <p>
          <strong>John Wilson</strong>
          <small>Designer & Developer • Principle of Barrier & Co.</small>
        </p>
        <p><small>Photo by <a href="http://www.patrickmichaelchin.com">Patrick Michael Chin</a></small></p>
      </figcaption>
    </LetterImage>
    <LetterContainer>
      <p>Hi, I’m John—that bald headed guy with red glasses.</p>
      <p>If we can imagine this website as a discussion between me and you, it’d be weird to not have a little personality. So here are some words that I typed out with my disproportionaly large hands on a Monday night that I thought you might be interested in…</p>
      <hr />
      <p>Throughout the dozens of projects I’ve completed over the past 8 years, I’ve taken the time to empathize and understand each of the problems my clients were facing at a core-business level. I then took those problems and implemented ideal solutions with UX/UI design and code within their respective timeframes and budgets.</p>
      <p>I’m confident that once I understand whatever the real issue is behind the roadblocks you are facing, I can bring that same level of dedication to your project to not only overcome those roadblocks, but also to help make your dream become a reality.</p>
      <p>Whether in person or on a call, I’d love to sit down with you sometime to talk more about your dreams, ideas and projects. Shoot me an email anytime at <a href="mailto:john@barrierandco.com">john@barrierandco.com</a>.</p>
      <img src={signature} alt="John Wilson's signature" />
    </LetterContainer>
  </Container>

export default Letter