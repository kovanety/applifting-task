import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { FONT_SIZE, TEXT_COLOR, FONT_WEIGHT } from '../../constants'
import { formatThousands } from '../../utils/formatThousands'
import { selectClickScore } from '../../selectors/clickSelectors'

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

export const ClickCounter = () => {
  const { your_clicks, team_clicks } = useSelector(selectClickScore)

  return (
    <Container>
      <Column>
        Your clicks:
        <Score>{formatThousands(your_clicks)}</Score>
      </Column>
      <Column>
        Team clicks:
        <Score>{formatThousands(team_clicks)}</Score>
      </Column>
    </Container>
  )
}
