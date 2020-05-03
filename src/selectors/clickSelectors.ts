import { ClickReducerState } from '../reducers/clickReducer'

export const selectClickScore = ({
  clickReducer,
}: {
  clickReducer: ClickReducerState
}) => clickReducer.teamScore
