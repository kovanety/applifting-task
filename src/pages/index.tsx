import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Layout } from '../components/Layout'
import { LeaderBoard } from '../components/shared/LeaderBoard'

export const HomePage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <LeaderBoard />
    </Layout>
  )
}
