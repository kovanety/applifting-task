import React from 'react'
import styled, { keyframes } from 'styled-components'

import { COLOR } from '../../constants'

const pulse = keyframes`
  to {
  opacity: 0.1;
  transform: translate(0, -2rem);
}
`

const Container = styled.div`
  width: 100%;
  height: 40rem;
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Dot = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${COLOR.PRIMARY_BLUE};
  border-radius: 50%;
  margin: 0.3rem;
  animation: ${pulse} 0.6s infinite alternate;

  :nth-child(2) {
    animation-delay: 0.2s;
  }

  :nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const LoadingScreen = () => {
  return (
    <Container>
      <Loader>
        <Dot />
        <Dot />
        <Dot />
      </Loader>
    </Container>
  )
}
