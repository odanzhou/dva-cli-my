import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from '../pages/Index/IndexPage'

function RouterConfig({ history }: any) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
