import { createSelector } from 'reselect'
import { ScoreReducerState } from '../reducers/scoreReducer'

const getScoreState = ({ scoreReducer }: { scoreReducer: ScoreReducerState }) =>
  scoreReducer

export const selectTopTenClickers = createSelector(
  [getScoreState],
  ({ scores }) => [...scores].slice(0, 10)
)

export const selectScoreFetchState = createSelector(
  [getScoreState],
  ({ fetchState }) => fetchState
)
