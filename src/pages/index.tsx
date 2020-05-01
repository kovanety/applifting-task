import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import { getScores } from '../actions/getScores'
import {
  selectTopTenClickers,
  selectScoreFetchState,
} from '../selectors/scoreSelectors'

import { Layout } from '../components/Layout'
import { LeaderBoard } from '../components/shared/LeaderBoard'
import { Quote } from '../components/homepage/Quote'
import { Ribbon } from '../components/homepage/Ribbon'
import { CreateTeamForm } from '../components/homepage/CreateTeamForm'

export const HomePage: FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  const scores = useSelector(selectTopTenClickers)
  const fetchState = useSelector(selectScoreFetchState)

  useEffect(() => {
    dispatch(getScores())
  }, [dispatch])

  return (
    <Layout>
      <Quote />
      <LeaderBoard scores={scores} fetchState={fetchState}>
        <CreateTeamForm />
        <Ribbon />
      </LeaderBoard>
    </Layout>
  )
}
