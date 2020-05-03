import { SessionReducerState } from '../reducers/sessionReducer'

export const selectSession = ({
  sessionReducer,
}: {
  sessionReducer: SessionReducerState
}) => sessionReducer.session
