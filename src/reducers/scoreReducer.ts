import { Action } from 'redux'

import { SCORE_ACTION_TYPES } from '../constants/actionTypes'
import { FETCH_STATE } from '../constants/fetchState'
import { Scores } from '../types/Score'

export interface ScoreAction extends Action {
  scores?: Scores
  message?: string
}

export interface ScoreReducerState {
  error: string
  scores: Scores
  fetchState: FETCH_STATE
}

const initialState: ScoreReducerState = {
  error: '',
  scores: [],
  fetchState: FETCH_STATE.INITIAL_FETCHING,
}

export const scoreReducer = (state = initialState, action: ScoreAction) => {
  switch (action.type) {
    case SCORE_ACTION_TYPES.SCORE_LIST_DONE:
      return {
        error: '',
        scores: action.scores,
        fetchState: FETCH_STATE.DONE,
      }

    case SCORE_ACTION_TYPES.SCORE_LIST_INITIAL_FETCHING:
      return {
        ...state,
        error: '',
        fetchState: FETCH_STATE.INITIAL_FETCHING,
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
