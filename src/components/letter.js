import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 80px;
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`

const LetterContainer = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  float: right;
  margin-top: 80px;
  padding: 40px;
  width: 70%;
  hr {
    border: none;
    border-top: 1px solid ${props => props.theme.colors.light};
    margin: 32px 0;
  }
  img {
    width: 110px;
  }
`

const LetterImage = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  float: left;
  margin-right: -30%;
  width: 40%;
`

const Letter = props =>
  <Container>
    <LetterImage src="/images/jw-portrait.png" />
    <LetterContainer>
      <p>Hi, I’m John—that bald headed guy with red glasses.</p>
      <p>If we can imagine this website as a discussion between me and you, it’d be weird to not have a little personality. So here are some words that I typed out with my disproportionaly large hands on a Monday night that I thought you might be interested in…</p>
      <hr />
      <p>Throughout the dozens of projects I’ve completed over the past 8 years, I’ve taken the time to empathize and understand each of the problems my clients were facing at a core-business level. I then took those problems and implemented ideal solutions with UX/UI design and code within their respective timeframes and budgets.</p>
      <p>I’m confident that once I understand whatever the real issue is behind the roadblocks you are facing, I can bring that same level of dedication to your project to not only overcome those roadblocks, but also to help make your dream become a reality.</p>
      <p>Whether in person or on a call, I’d love to sit down with you sometime to talk more about your dreams, ideas and projects. Shoot me an email anytime at <a href="mailto:john@barrierandco.com">john@barrierandco.com</a>.</p>
      <img src="/images/jw-signature.png" />
    </LetterContainer>
  </Container>

export default Letter