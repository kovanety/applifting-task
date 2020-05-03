import { ClickReducerState } from '../reducers/clickReducer'

export const selectClickScore = ({
  clickReducer,
}: {
  clickReducer: ClickReducerState
}) => clickReducer.teamScore

export const selectClickFetchState = ({
  clickReducer,
}: {
  clickReducer: ClickReducerState
}) => clickReducer.fetchState
