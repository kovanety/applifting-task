import React, { FC } from 'react'
import styled from 'styled-components'
import { FONT_SIZE, TEXT_COLOR, FONT_WEIGHT } from '../../constants'
import { formatThousands } from '../../utils/formatThousands'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem 0 2rem;
`

const Column = styled.div`
  text-align: center;
  font-style: italic;
`

const Score = styled.div`
  font-size: ${FONT_SIZE.EXTRA_LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${TEXT_COLOR.BLUE};
  font-style: normal;
`

interface ClickCounterProps {
  teamScore: number
  yourScore: number
}

export const ClickCounter: FC<ClickCounterProps> = ({
  teamScore,
  yourScore,
}) => {
  return (
    <Container>
      <Column>
        Your clicks:
        <Score>{formatThousands(yourScore)}</Score>
      </Column>
      <Column>
        Team clicks:
        <Score>{formatThousands(teamScore)}</Score>
      </Column>
    </Container>
  )
}
