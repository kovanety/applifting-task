import { createSelector } from 'reselect'

import { ClickReducerState } from '../reducers/clickReducer'

const getClickState = ({ clickReducer }: { clickReducer: ClickReducerState }) =>
  clickReducer

export const selectClickScore = createSelector(
  [getClickState],
  ({ teamScore }) => teamScore
)

export const selectClickFetchState = createSelector(
  [getClickState],
  ({ fetchState }) => fetchState
)
