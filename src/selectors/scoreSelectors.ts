import { createSelector } from 'reselect'
import { ScoreReducerState } from '../reducers/scoreReducer'

const getScoreState = ({ scoreReducer }: { scoreReducer: ScoreReducerState }) =>
  scoreReducer

export const selectTopTenClickers = createSelector(
  [getScoreState],
  ({ scores }) => [...scores].slice(0, 10)
)

export const selectSurroundingClickers = (currentTeam: string) => {
  return createSelector([getScoreState], ({ scores }) => {
    //Prevent mutation of original data
    const scoreCopy = [...scores]

    const currentTeamScore = scoreCopy.find(({ team }) => currentTeam === team)
    const order = currentTeamScore ? currentTeamScore.order : -1

    const NUMBER_OF_DISPLAYED_SCORES = 7
    let SCORE_END = order + 3

    //If the current team is in the top 3, display the first 7 teams
    if (scoreCopy.length - 1 < SCORE_END) {
      SCORE_END = scoreCopy.length
    }

    //If the current end is near the end, display the last 7 teams
    if (order < 4) {
      SCORE_END = NUMBER_OF_DISPLAYED_SCORES
    }

    return scoreCopy.slice(SCORE_END - NUMBER_OF_DISPLAYED_SCORES, SCORE_END)
  })
}

export const selectScoreFetchState = createSelector(
  [getScoreState],
  ({ fetchState }) => fetchState
)

export const selectScoreError = createSelector(
  [getScoreState],
  ({ error }) => error
)
