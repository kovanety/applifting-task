import React from 'react'
import styled from 'styled-components'
import { COLOR, TEXT_COLOR, FONT_WEIGHT } from '../../constants'

const Container = styled.div`
  position: relative;
  width: 15rem;
  padding: 1rem 1.5rem;
  margin: 0 auto 2rem;
  background: ${COLOR.PRIMARY_BLUE};
  text-align: center;
  font-weight: ${FONT_WEIGHT.MEDIUM};
  color: ${TEXT_COLOR.WHITE};
  transform-style: preserve-3d;

  ::before,
  ::after {
    content: '';
    position: absolute;
    display: block;
    width: 3rem;
    top: 1rem;
    border: 2rem solid ${COLOR.DARK_BLUE};
    transform: translateZ(-1px);
  }

  ::before {
    left: -5.5rem;
    border-left-color: transparent;
  }

  ::after {
    right: -5.5rem;
    border-right-color: transparent;
  }
`

export const Ribbon = () => {
  return <Container>Top 10 Clickers</Container>
}
