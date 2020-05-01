import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'

import { rootReducer } from '../reducers'

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>
