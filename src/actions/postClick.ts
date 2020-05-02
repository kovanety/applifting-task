import axios from 'axios'

import { API_URL } from '../constants'
import { CLICK_ACTION_TYPES } from '../constants/actionTypes'
import { AppThunk } from '../types/AppThunk'
import { TeamScore } from '../types/TeamScore'

const receiveClickInfo = (teamScore: TeamScore) => ({
  type: CLICK_ACTION_TYPES.CLICK_DONE,
  teamScore,
})

const postClickFailed = (message: string) => ({
  type: CLICK_ACTION_TYPES.CLICK_FAILED,
  message,
})

export const postClick = (session: string, team?: string): AppThunk => (
  dispatch
) => {
  axios
    .post(`${API_URL}/klik`, {
      team,
      session,
    })
    .then(({ data }) => dispatch(receiveClickInfo(data)))
    .catch((err: string) => dispatch(postClickFailed(err)))
}
