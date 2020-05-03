import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { getScores, requestInitialScores } from '../actions/getScores'
import {
  selectTopTenClickers,
  selectScoreFetchState,
} from '../selectors/scoreSelectors'
import { FETCH_STATE } from '../constants/fetchState'

import { LeaderBoard } from '../components/LeaderBoard'
import { Quote } from '../components/homepage/Quote'
import { Ribbon } from '../components/homepage/Ribbon'
import { CreateTeamForm } from '../components/homepage/CreateTeamForm'

export const HomePage: FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()

  const scores = useSelector(selectTopTenClickers)
  const fetchState = useSelector(selectScoreFetchState)

  useEffect(() => {
    if (fetchState !== FETCH_STATE.DONE) {
      dispatch(getScores(true))
    }

    //Reset the score fetchState on page unmount
    return () => {
      dispatch(requestInitialScores())
    }
  }, [dispatch])

  return (
    <>
      <Quote />
      <LeaderBoard scores={scores} fetchState={fetchState}>
        <CreateTeamForm />
        <Ribbon />
      </LeaderBoard>
    </>
  )
}
