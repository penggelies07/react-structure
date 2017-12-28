import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router} from 'react-router'
import {createBrowserHistory} from 'history'
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router'
import * as stores from './stores'
import routers from './routers'
import './styles/index.less'

const history = syncHistoryWithStore(
  createBrowserHistory(),
  stores.routing as RouterStore
)

ReactDOM.render(
  <Router history={history}>
    {routers}
  </Router>,
  document.getElementById('root') as HTMLElement
)
