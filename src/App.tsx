import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'

import store from './store'

import { HomePage } from './pages'

export const App = () => (
  <Provider store={store}>
    <Router>
      <HomePage path="/" />
    </Router>
  </Provider>
)
