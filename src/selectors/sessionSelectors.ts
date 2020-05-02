import { createSelector } from 'reselect'
import { SessionReducerState } from '../reducers/sessionReducer'

const getSessionState = ({
  sessionReducer,
}: {
  sessionReducer: SessionReducerState
}) => sessionReducer

export const selectSession = createSelector(
  [getSessionState],
  ({ session }) => session
)
