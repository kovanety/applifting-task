import { SESSION_ACTION_TYPES } from '../constants/actionTypes'

export const createSession = (session: string) => ({
  type: SESSION_ACTION_TYPES.CREATE_SESSION,
  session,
})
