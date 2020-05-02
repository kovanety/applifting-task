import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

import { RootState } from '../store'

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
