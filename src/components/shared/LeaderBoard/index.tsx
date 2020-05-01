import React from 'react'
import styled from 'styled-components'

import { BORDER_RADIUS, COLOR } from '../../../constants'

const Container = styled.div`
  max-width: 65rem;
  margin: auto;
  box-sizing: content-box;
  border-radius: ${BORDER_RADIUS};
  border: 2px solid ${COLOR.PRIMARY_BLUE};
  background: ${COLOR.WHITE};
`

const TeaseText = styled.div`
  margin: 2rem auto;
  text-align: center;
  font-style: italic;
`

export const LeaderBoard = () => (
  <Container>
    <TeaseText>Want to be top? STFU and click!</TeaseText>
  </Container>
)
