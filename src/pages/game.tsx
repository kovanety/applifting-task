import React, { useEffect, useCallback, useState, FC } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'
import { v4 as generateId } from 'uuid'
import { debounce } from 'throttle-debounce'

import { selectSession } from '../selectors/sessionSelectors'
import { postClick } from '../actions/postClick'
import { createSession } from '../actions/createSession'
import { selectClickScore } from '../selectors/clickSelectors'
import {
  selectSurroundingClickers,
  selectScoreFetchState,
} from '../selectors/scoreSelectors'
import { getScores } from '../actions/getScores'
import { BUTTON_PADDING } from '../constants'

import { LeaderBoard } from '../components/LeaderBoard'
import { ClickCounter } from '../components/teampage/ClickCounter'
import { Button } from '../components/Button'
import { TeamInfo } from '../components/teampage/TeamInfo'

const ButtonContainer = styled.div`
  padding: 1rem;
`

interface GameProps extends RouteComponentProps {
  team?: string
}

export const Game: FC<GameProps> = ({ team = '' }) => {
  const dispatch = useDispatch()
  const [isSessionGenerated, setIsSessionGenerated] = useState(false)

  const session = useSelector(selectSession)
  const scores = useSelector(selectSurroundingClickers(team))
  const fetchState = useSelector(selectScoreFetchState)
  const { your_clicks, team_clicks } = useSelector(selectClickScore)

  //Delay the leaderboard fetch to improve performance
  const debounceScoreFetch = useCallback(
    debounce(200, () => dispatch(getScores())),
    []
  )

  useEffect(() => {
    const postClickAndFetchScores = async () => {
      //Create new session on page load
      const newSession = generateId()

      dispatch(createSession(newSession))
      return dispatch(postClick(newSession, team))
    }

    postClickAndFetchScores().then(() => {
      dispatch(getScores(true))
      setIsSessionGenerated(true)
    })
  }, [dispatch, team])

  const onButtonClick = () => {
    dispatch(postClick(session, team))
    debounceScoreFetch()
  }

  return (
    <>
      <TeamInfo team={team} />
      <LeaderBoard
        scores={scores}
        fetchState={fetchState}
        isFetching={!isSessionGenerated}
        currentTeam={team}
      >
        <ButtonContainer>
          <Button onClick={onButtonClick} padding={BUTTON_PADDING.LARGE}>
            Click!
          </Button>
        </ButtonContainer>
        <ClickCounter teamScore={team_clicks} yourScore={your_clicks} />
      </LeaderBoard>
    </>
  )
}
