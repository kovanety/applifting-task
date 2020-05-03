import React, { useEffect, useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps, useLocation } from '@reach/router'
import { v4 as generateId } from 'uuid'

import { handleClick } from '../actions/handleClick'
import { createSession } from '../actions/createSession'
import { selectClickScore } from '../selectors/clickSelectors'
import {
  selectSurroundingClickers,
  selectScoreFetchState,
} from '../selectors/scoreSelectors'
import { getScores } from '../actions/getScores'
import { RESTMethods } from '../constants/RESTmethods'
import { socketClient } from '../utils/socketClient'
import { selectSession } from '../selectors/sessionSelectors'

import { LeaderBoard } from '../components/LeaderBoard'
import { ClickCounter } from '../components/teampage/ClickCounter'
import { TeamInfo } from '../components/teampage/TeamInfo'
import { ClickButton } from '../components/teampage/ClickButton'
import { useDebounceScoreFetch } from '../utils/useDebounceScoreFetch'

interface GameProps extends RouteComponentProps {
  team?: string
}

export const Game: FC<GameProps> = ({ team = '' }) => {
  const dispatch = useDispatch()
  const fetchScores = useDebounceScoreFetch()
  const { state } = useLocation()
  const [isSessionGenerated, setIsSessionGenerated] = useState(false)

  const session = useSelector(selectSession)
  const scores = useSelector(selectSurroundingClickers(team))
  const fetchState = useSelector(selectScoreFetchState)
  const { your_clicks, team_clicks } = useSelector(selectClickScore)

  useEffect(() => {
    //Listen for clicks and fetch new team clicks
    socketClient.on(
      'click',
      (receivedTeam: string, receivedSession: string) => {
        const isSameSession = session && receivedSession !== session

        if (receivedTeam === team && isSameSession) {
          dispatch(handleClick(session, team, RESTMethods.GET))
          fetchScores()
        }
      }
    )
  }, [dispatch, session, team, fetchScores])

  useEffect(() => {
    const handleClickAndFetchScores = async () => {
      //Create new session on page load
      const newSession = generateId()
      const shouldPost = (state as { shouldPost: boolean })?.shouldPost
      const method = shouldPost ? RESTMethods.POST : RESTMethods.GET

      if (shouldPost) {
        socketClient.emit('click', team, newSession)
      }

      dispatch(createSession(newSession))
      return dispatch(handleClick(newSession, team, method))
    }

    handleClickAndFetchScores().then(() => {
      dispatch(getScores(true))
      setIsSessionGenerated(true)
    })
  }, [dispatch, team, state])

  return (
    <>
      <TeamInfo team={team} />
      <LeaderBoard
        scores={scores}
        fetchState={fetchState}
        isFetching={!isSessionGenerated}
        currentTeam={team}
      >
        <ClickButton team={team} />
        <ClickCounter teamScore={team_clicks} yourScore={your_clicks} />
      </LeaderBoard>
    </>
  )
}
