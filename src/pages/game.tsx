import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps, useLocation } from '@reach/router'
import { v4 as generateId } from 'uuid'

import { handleClick } from '../actions/handleClick'
import { createSession } from '../actions/createSession'
import { selectClickFetchState } from '../selectors/clickSelectors'
import {
  selectSurroundingClickers,
  selectScoreFetchState,
} from '../selectors/scoreSelectors'
import { getScores } from '../actions/getScores'
import { RESTMethods } from '../constants/RESTmethods'
import { socketClient } from '../utils/socketClient'
import { selectSession } from '../selectors/sessionSelectors'
import { useDebounceScoreFetch } from '../utils/useDebounceScoreFetch'

import { LeaderBoard } from '../components/LeaderBoard'
import { ClickCounter } from '../components/teampage/ClickCounter'
import { TeamInfo } from '../components/teampage/TeamInfo'
import { ClickButton } from '../components/teampage/ClickButton'
import { FETCH_STATE } from '../constants/fetchState'

interface GameProps extends RouteComponentProps {
  team?: string
}

export const Game: FC<GameProps> = ({ team = '' }) => {
  const dispatch = useDispatch()
  const fetchScores = useDebounceScoreFetch()
  const { state } = useLocation()

  const session = useSelector(selectSession)
  const scores = useSelector(selectSurroundingClickers(team))
  const leaderboardFetchState = useSelector(selectScoreFetchState)
  const clickFetchState = useSelector(selectClickFetchState)

  useEffect(() => {
    //Listen for clicks and fetch new team clicks
    socketClient.on(
      'click',
      (receivedTeam: string, receivedSession: string) => {
        const isNotSameSession = session && receivedSession !== session
        //Only fetch the clicks when the message is from the same team, but a different user
        if (receivedTeam === team && isNotSameSession) {
          dispatch(handleClick(session, team, RESTMethods.GET))
          fetchScores()
        }
      }
    )

    //Disconnect socket on unmount
    return () => {
      socketClient.off('click')
    }
  }, [dispatch, session, team, fetchScores])

  useEffect(() => {
    //Create new session on page load
    const newSession = generateId()
    //shouldPost is true when the team was just created with the homepage form
    const shouldPost = (state as { shouldPost: boolean })?.shouldPost
    const method = shouldPost ? RESTMethods.POST : RESTMethods.GET

    if (shouldPost) {
      socketClient.emit('click', team, newSession)
    }

    dispatch(createSession(newSession))
    dispatch(handleClick(newSession, team, method))
  }, [dispatch, team, state])

  useEffect(() => {
    //Fetch the leaderboard after the initial click response is loaded
    if (
      leaderboardFetchState === FETCH_STATE.INITIAL_FETCHING &&
      clickFetchState !== FETCH_STATE.FETCHING
    )
      dispatch(getScores())
  }, [leaderboardFetchState, clickFetchState, dispatch])

  return (
    <>
      <TeamInfo team={team} />
      <LeaderBoard scores={scores} currentTeam={team}>
        <ClickButton team={team} />
        <ClickCounter />
      </LeaderBoard>
    </>
  )
}
