import { createSelector } from 'reselect'
import { ClickReducerState } from '../reducers/clickReducer'

const getClicks = ({ clickReducer }: { clickReducer: ClickReducerState }) =>
  clickReducer

export const selectClickScore = createSelector(
  [getClicks],
  ({ teamScore }) => teamScore
)
