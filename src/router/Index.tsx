import React from 'react'
import { Router, Switch } from 'dva/router'
import { renderRoutes } from "react-router-config"
import routes from './routes'

function RouterConfig({ history }: any) {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Router>
  )
}

export default RouterConfig
