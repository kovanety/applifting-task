import { SCORE_ACTION_TYPES } from '../constants/actionTypes'
import { Scores } from '../types/Score'
import { ScoreAction } from '../actions/getScores'
import { FETCH_STATE } from '../constants/fetchState'

export interface ScoreReducerState {
  error: string
  scores: Scores
  fetchState: FETCH_STATE
}

const initialState: ScoreReducerState = {
  error: '',
  scores: [],
  fetchState: FETCH_STATE.FETCHING,
}

export const scoreReducer = (state = initialState, action: ScoreAction) => {
  switch (action.type) {
    case SCORE_ACTION_TYPES.SCORE_LIST_DONE:
      return {
        ...state,
        error: '',
        scores: action.scores,
        fetchState: FETCH_STATE.DONE,
      }

    case SCORE_ACTION_TYPES.SCORE_LIST_FETCHING:
      return {
        ...state,
        error: '',
        fetchState: FETCH_STATE.FETCHING,
      }

    case SCORE_ACTION_TYPES.SCORE_LIST_FAILED:
      return {
        ...state,
        error: action.message,
        fetchState: FETCH_STATE.FAILED,
      }

    default:
      return state
  }
}
