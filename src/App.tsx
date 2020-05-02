import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'

import store from './store'

import { HomePage } from './pages'
import { Game } from './pages/game'
import { Layout } from './components/Layout'

export const App = () => (
  <Provider store={store}>
    <Layout>
      <Router>
        <HomePage path="/" />
        <Game path="/:team" />
      </Router>
    </Layout>
  </Provider>
)
