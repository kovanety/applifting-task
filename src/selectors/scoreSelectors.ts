import { createSelector } from 'reselect'
import { ScoreReducerState } from '../reducers/scoreReducer'
import { Scores } from '../types/Score'

const getScoreState = ({ scoreReducer }: { scoreReducer: ScoreReducerState }) =>
  scoreReducer

export const selectTopTenClickers = createSelector(
  [getScoreState],
  ({ scores }) => [...scores].slice(0, 10)
)

export const selectSurroundingClickers = (currentTeam: string) => {
  return createSelector([getScoreState], ({ scores }) => {
    //Avoids mutation of original data
    const scoreCopy: Scores = JSON.parse(JSON.stringify(scores))
    const NUMBER_OF_DISPLAYED_SCORES = 7

    const currentTeamScore = scoreCopy.find(({ team }) => currentTeam === team)
    const order = currentTeamScore ? currentTeamScore.order : -1

    if (currentTeamScore) {
      currentTeamScore.isCurrent = true
    }

    //If the current team is in the top 3 or the list is too short, display the first 7 teams
    if (order < 4) {
      return scoreCopy.slice(0, NUMBER_OF_DISPLAYED_SCORES)
    }

    if (scoreCopy.length < order + 4) {
      return scoreCopy.slice(
        scoreCopy.length - NUMBER_OF_DISPLAYED_SCORES,
        scoreCopy.length
      )
    }
    //Display the current team score and 3 of the previous and following scores
    return scoreCopy.slice(order - 4, order + 3)
  })
}

export const selectScoreFetchState = createSelector(
  [getScoreState],
  ({ fetchState }) => fetchState
)
