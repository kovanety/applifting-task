import { Action } from 'redux'

import { CLICK_ACTION_TYPES } from '../constants/actionTypes'
import { TeamScore } from '../types/TeamScore'

export interface ClickAction extends Action {
  teamScore?: TeamScore
  message?: string
}

export interface ClickReducerState {
  error: string
  teamScore: TeamScore
}

const initialState: ClickReducerState = {
  error: '',
  teamScore: { team_clicks: 0, your_clicks: 0 },
}

export const clickReducer = (state = initialState, action: ClickAction) => {
  switch (action.type) {
    case CLICK_ACTION_TYPES.CLICK_DONE:
      return {
        error: '',
        teamScore: action.teamScore,
      }

    case CLICK_ACTION_TYPES.CLICK_FETCHING:
      return {
        ...state,
        error: '',
      }

    case CLICK_ACTION_TYPES.CLICK_FAILED:
      return {
        ...state,
        error: action.message,
      }

    default:
      return state
  }
}
