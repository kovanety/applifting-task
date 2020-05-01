import axios from 'axios'

import { SCORE_ACTION_TYPES } from '../constants/actionTypes'
import { API_URL } from '../constants'
import { AppThunk } from '../types/AppThunk'
import { Scores } from '../types/Score'
import { Action } from 'redux'

export interface ScoreAction extends Action {
  scores?: Scores
  message?: string
}

const requestScores = () => ({
  type: SCORE_ACTION_TYPES.SCORE_LIST_FETCHING,
})

const receiveScores = (scores: Scores) => ({
  type: SCORE_ACTION_TYPES.SCORE_LIST_DONE,
  scores,
})

const scoreFetchFailed = (message: string) => ({
  type: SCORE_ACTION_TYPES.SCORE_LIST_FAILED,
  message,
})

export const getScores = (): AppThunk => (dispatch) => {
  dispatch(requestScores())

  axios
    .get(`${API_URL}/leaderboard`)
    .then(({ data }) => dispatch(receiveScores(data)))
    .catch((err: string) => dispatch(scoreFetchFailed(err)))
}
