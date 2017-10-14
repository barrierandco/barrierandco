import React from 'react'
import styled from 'styled-components'
import portrait from '../assets/images/jw-portrait.jpg'
import signature from '../assets/images/jw-signature.png'

const Container = styled.div`
  margin-top: 56px;
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
  border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  font-style: italic;
  margin: 0;
  padding: 20px;
  position: relative;
  z-index: 10;
  @media ${props => props.theme.breakpoint} {
    border-radius: ${props => props.theme.borderRadius};
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
    width: 80px;
    @media ${props => props.theme.breakpoint} {
      width: 110px;
    }
  }
`

const LetterImage = styled.figure`
  display: block;
  margin: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  @media ${props => props.theme.breakpoint} {
    float: left;
    height: auto;
    margin: 0 -30% 0 0;
    overflow: visible;
    width: 37.5%;
  }
  a {
    color: inherit;
  }
  figcaption {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.9));
    bottom: 0;
    color: white;
    left: 0;
    padding: 40px 20px 16px;
    position: absolute;
    right: 0;
    @media ${props => props.theme.breakpoint} {
      background: none;
      color: inherit;
      margin-top: 16px;
      padding: 0;
      position: relative;
      width: 75%;
    }
  }
  img {
    border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
    box-shadow: ${props => props.theme.boxShadow};
    display: block;
    width: 100%;
    @media ${props => props.theme.breakpoint} {
      border-radius: ${props => props.theme.borderRadius};
    }
  }
  p {
    margin-bottom: 0;
  }
  small {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 0.7rem;
    @media ${props => props.theme.breakpoint} {
      font-size: 0.6rem;
      opacity: 0.5;
    }
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
          <small>Principle of Barrier&nbsp;&amp;&nbsp;Co. &mdash; Designer&nbsp;&amp;&nbsp;Developer</small>
        </p>
        <p><small>Photo by <a href="http://www.patrickmichaelchin.com">Patrick Michael Chin</a></small></p>
      </figcaption>
    </LetterImage>
    <LetterContainer>
      <p>Hi, I’m John—that bald headed guy with&nbsp;red&nbsp;glasses.</p>
      <p>If we can imagine this website as a discussion between me and you, it’d be weird to not have a little personality. So here are some words that I typed out with my disproportionaly large hands on a Monday night that I thought you might be&nbsp;interested&nbsp;in…</p>
      <hr />
      <p>Throughout the dozens of projects I’ve completed since 2009, I’ve taken the time to empathize and understand each of the problems my clients were facing at a core-business level. I then took those problems and implemented ideal solutions with UX/UI design and code <strong>within their respective timeframes&nbsp;and&nbsp;budgets</strong>.</p>
      <p>I’m confident that once I understand whatever the real issue is behind the roadblocks you are facing, I can bring that same level of dedication to your project to not only overcome those roadblocks, but also to help make your dream become&nbsp;a&nbsp;reality.</p>
      <p>Whether in person or on a call, I’d love to sit down with you sometime to talk more about your dreams, ideas and projects. Shoot me an email anytime&nbsp;at&nbsp;<a href="mailto:john@barrierandco.com">john@barrierandco.com</a>.</p>
      <img src={signature} alt="John Wilson's signature" />
    </LetterContainer>
  </Container>

export default Letter