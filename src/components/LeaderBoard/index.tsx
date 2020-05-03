import React, { FC } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import {
  BORDER_RADIUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  TEXT_COLOR,
  LEADERBOARD_WIDTH,
} from '../../constants'
import { Scores } from '../../types/Score'
import {
  selectScoreFetchState,
  selectScoreError,
} from '../../selectors/scoreSelectors'
import { FETCH_STATE } from '../../constants/fetchState'

import { ScoreRow } from './ScoreRow'
import { LoadingScreen } from '../LoadingScreen'
import { CurrentTeamRow } from './CurrentTeamRow'
import { ErrorMessage } from '../ErrorMessage'

const Container = styled.div`
  max-width: ${LEADERBOARD_WIDTH};
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
  currentTeam?: string
}

export const LeaderBoard: FC<LeaderBoardProps> = ({
  children,
  scores,
  currentTeam,
}) => {
  const fetchState = useSelector(selectScoreFetchState)
  const fetchError = useSelector(selectScoreError)

  if (fetchState === FETCH_STATE.INITIAL_FETCHING) {
    return <LoadingScreen />
  }

  if (fetchError) {
    return <ErrorMessage>{fetchError}</ErrorMessage>
  }

  return (
    <Container>
      {children}
      <ul>
        <ScoreLabels>
          <div>Team</div>
          <div>Clicks</div>
        </ScoreLabels>

        {scores.map(({ order, team, clicks }) => {
          if (currentTeam === team) {
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
