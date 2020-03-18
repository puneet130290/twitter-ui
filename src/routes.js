import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import * as ROUTES from './resources/routeNames'

import LoginView from './views/LoginView'
import HomeView from './views/HomeView'

const routes = () => {
  return (
    <Switch>
      <Route
        exact
        path={ROUTES.LOGIN_VIEW}
        render={props => <LoginView {...props} />}
      />
      <Route
        exact
        path={ROUTES.HOME_VIEW}
        render={props => <HomeView {...props} />}
      />
    </Switch>
  )
}

export default routes
