import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { COLOR, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } from '../constants'

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
		font-size: 62.5%;
	}

  body {
    color: ${TEXT_COLOR.BLACK};
    font-size: ${FONT_SIZE.BASE};
    font-family: 'Roboto', sans-serif;
  }

  a {
    cursor: pointer;
  }

`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${COLOR.LIGHT_GREY};
`

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  background: ${COLOR.PRIMARY_BLUE};
  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${TEXT_COLOR.WHITE};
  text-transform: uppercase;
`

const ContentWrapper = styled.main`
  flex-grow: 1;
`

const Footer = styled.footer`
  padding: 2rem 0;
  margin: 0 auto;
  font-size: ${FONT_SIZE.SMALL};
  font-style: italic;
`

export const Layout: FC = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Header>Stfuandclick.com</Header>
    <ContentWrapper>{children}</ContentWrapper>
    <Footer>
      If you don't like this page, it's{' '}
      <a href="https://applifting.cz/">Applifting</a>'s fault.
    </Footer>
  </Container>
)
