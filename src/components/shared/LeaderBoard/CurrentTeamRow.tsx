import React, { FC } from 'react'
import styled from 'styled-components'

import { ScoreRow, ScoreRowProps } from './ScoreRow'
import { COLOR, FONT_SIZE, TEXT_COLOR } from '../../../constants'

const StyledScoreRow = styled(ScoreRow)`
  background: ${COLOR.PRIMARY_BLUE};
  font-size: ${FONT_SIZE.LARGE};
  color: ${TEXT_COLOR.WHITE};
`

export const CurrentTeamRow: FC<ScoreRowProps> = ({
  rankNumber,
  name,
  points,
}) => {
  return <StyledScoreRow rankNumber={rankNumber} name={name} points={points} />
}
