import { Action } from 'redux'

import { SESSION_ACTION_TYPES } from '../constants/actionTypes'

export interface SessionAction extends Action {
  session: string
}

export interface SessionReducerState {
  session: string
}

const initialState: SessionReducerState = {
  session: '',
}

export const sessionReducer = (state = initialState, action: SessionAction) => {
  switch (action.type) {
    case SESSION_ACTION_TYPES.CREATE_SESSION:
      return {
        session: action.session,
      }

    default:
      return state
  }
}
