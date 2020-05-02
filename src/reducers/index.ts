import { combineReducers } from 'redux'

import { clickReducer } from './clickReducer'
import { scoreReducer } from './scoreReducer'
import { sessionReducer } from './sessionReducer'

export const rootReducer = combineReducers({
  clickReducer,
  scoreReducer,
  sessionReducer,
})
