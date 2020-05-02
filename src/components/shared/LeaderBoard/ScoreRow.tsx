import React, { FC } from 'react'
import styled from 'styled-components'

import { COLOR, FONT_WEIGHT } from '../../../constants'
import { isOdd } from '../../../utils/isOdd'
import { formatThousands } from '../../../utils/formatThousands'

const Container = styled.li<{ isOdd: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background: ${({ isOdd }) =>
    isOdd ? COLOR.LIGHT_BLUE : COLOR.EXTRA_LIGHT_BLUE};
  font-weight: ${FONT_WEIGHT.BOLD};
`

const LeftColumnWrapper = styled.div`
  display: flex;
`

const Rank = styled.div`
  width: 3.5rem;
  margin: 0 2.5rem 0 0.5rem;
  text-align: right;
`

export interface ScoreRowProps {
  order: number
  team: string
  clicks: number
  className?: string
}

export const ScoreRow: FC<ScoreRowProps> = ({
  order,
  team,
  clicks,
  className,
}) => (
  <Container isOdd={isOdd(order)} className={className}>
    <LeftColumnWrapper>
      <Rank>{order}</Rank> {team}
    </LeftColumnWrapper>
    <div>{formatThousands(clicks)}</div>
  </Container>
)
