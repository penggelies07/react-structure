import {History, Location} from 'history'
import {RouterStore} from 'mobx-react-router'

import Account from './Account'

interface IRouterStore {
  history: History
  location: Location
}

export const routing = new RouterStore() as IRouterStore
export const accountStore = new Account()
