import axios from 'axios'

import { SCORE_ACTION_TYPES } from '../constants/actionTypes'
import { API_URL } from '../constants'
import { AppThunk } from '../types/AppThunk'
import { Scores } from '../types/Score'

const requestScores = () => ({
  type: SCORE_ACTION_TYPES.SCORE_LIST_FETCHING,
})

export const requestInitialScores = () => ({
  type: SCORE_ACTION_TYPES.SCORE_LIST_INITIAL_FETCHING,
})

const receiveScores = (scores: Scores) => ({
  type: SCORE_ACTION_TYPES.SCORE_LIST_DONE,
  scores,
})

const scoreFetchFailed = (message: string) => ({
  type: SCORE_ACTION_TYPES.SCORE_LIST_FAILED,
  message,
})

export const getScores = (isInitialLoad?: boolean): AppThunk => (dispatch) => {
  if (isInitialLoad) {
    dispatch(requestInitialScores())
  } else {
    dispatch(requestScores())
  }

  axios
    .get(`${API_URL}/leaderboard`)
    .then(({ data }) => dispatch(receiveScores(data)))
    .catch(() => dispatch(scoreFetchFailed('Something went wrong :(')))
}
