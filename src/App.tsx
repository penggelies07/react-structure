import * as React from 'react'
// import {renderRoutes} from 'react-router-config'
import {Route, Switch, Redirect} from 'react-router'

import Home from './views/Home'

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {

  render () {
    return (
      <Switch>
        <Route path='/' component={Home}/>
        <Redirect to='/'/>
      </Switch>
    )
  }
}
