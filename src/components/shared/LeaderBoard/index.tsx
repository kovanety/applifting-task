import React, { FC } from 'react'
import styled from 'styled-components'

import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  TEXT_COLOR,
} from '../../../constants'
import { Scores } from '../../../types/Score'
import { ScoreRow } from './ScoreRow'
import { FETCH_STATE } from '../../../constants/fetchState'
import { LoadingScreen } from '../LoadingScreen'
import { CurrentTeamRow } from './CurrentTeamRow'

const Container = styled.div`
  max-width: 54rem;
  margin: auto;
  box-sizing: content-box;
  border-radius: ${BORDER_RADIUS};
  border: 2px solid ${COLOR.PRIMARY_BLUE};
  background: ${COLOR.WHITE};
`

const ScoreLabels = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem 0.5rem 7rem;
  font-size: ${FONT_SIZE.SMALL};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${TEXT_COLOR.GREY};
  text-transform: uppercase;
`
const TeaseText = styled.div`
  margin: 2rem auto;
  text-align: center;
  font-style: italic;
`

interface LeaderBoardProps {
  scores: Scores
  fetchState?: FETCH_STATE
  isFetching?: boolean
}

export const LeaderBoard: FC<LeaderBoardProps> = ({
  children,
  scores,
  fetchState,
  isFetching,
}) => {
  if (fetchState === FETCH_STATE.FETCHING || isFetching) {
    return <LoadingScreen />
  }

  return (
    <Container>
      {children}
      <ul>
        <ScoreLabels>
          <div>Team</div>
          <div>Clicks</div>
        </ScoreLabels>

        {scores.map(({ order, team, clicks, isCurrent }) => {
          if (isCurrent) {
            return (
              <CurrentTeamRow
                key={order}
                order={order}
                clicks={clicks}
                team={team}
              />
            )
          }
          return (
            <ScoreRow key={order} order={order} clicks={clicks} team={team} />
          )
        })}
      </ul>
      <TeaseText>Want to be top? STFU and click!</TeaseText>
    </Container>
  )
}
