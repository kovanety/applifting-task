import { Action } from 'redux'

import { CLICK_ACTION_TYPES } from '../constants/actionTypes'
import { TeamScore } from '../types/TeamScore'
import { FETCH_STATE } from '../constants/fetchState'

export interface ClickAction extends Action {
  teamScore?: TeamScore
  message?: string
}

export interface ClickReducerState {
  error: string
  teamScore: TeamScore
  fetchState: FETCH_STATE
}

const initialState: ClickReducerState = {
  error: '',
  teamScore: { team_clicks: 0, your_clicks: 0 },
  fetchState: FETCH_STATE.FETCHING,
}

export const clickReducer = (state = initialState, action: ClickAction) => {
  switch (action.type) {
    case CLICK_ACTION_TYPES.CLICK_DONE:
      return {
        error: '',
        teamScore: action.teamScore,
        fetchState: FETCH_STATE.DONE,
      }

    case CLICK_ACTION_TYPES.CLICK_FETCHING:
      return {
        ...state,
        error: '',
        fetchState: FETCH_STATE.FETCHING,
      }

    case CLICK_ACTION_TYPES.CLICK_FAILED:
      return {
        ...state,
        error: action.message,
        fetchState: FETCH_STATE.FAILED,
      }

    default:
      return state
  }
}
