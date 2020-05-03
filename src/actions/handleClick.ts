import axios from 'axios'

import { API_URL } from '../constants'
import { CLICK_ACTION_TYPES } from '../constants/actionTypes'
import { AppThunk } from '../types/AppThunk'
import { TeamScore } from '../types/TeamScore'
import { RESTMethods } from '../constants/RESTmethods'

const requestClick = () => ({
  type: CLICK_ACTION_TYPES.CLICK_FETCHING,
})

const receiveClickInfo = (teamScore: TeamScore) => ({
  type: CLICK_ACTION_TYPES.CLICK_DONE,
  teamScore,
})

const handleClickFailed = (message: string) => ({
  type: CLICK_ACTION_TYPES.CLICK_FAILED,
  message,
})

export const handleClick = (
  session: string,
  team: string,
  method: RESTMethods
): AppThunk => (dispatch) => {
  dispatch(requestClick())

  const requestBody = { team, session }

  axios({
    method,
    url: `${API_URL}/klik`,
    params: requestBody,
    data: requestBody,
  })
    .then(({ data }) => dispatch(receiveClickInfo(data)))
    .catch((err: string) => dispatch(handleClickFailed(err)))
}
