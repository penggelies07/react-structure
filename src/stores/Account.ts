import {subscriber} from 'event-bus-decorators'
import {action, observable} from 'mobx'
import {IUser} from './models'

@subscriber
export default class Account {
  @observable user: IUser = {
    id: '',
    name: '',
    avatar: ''
  }
  
  @action
  setUser (user: IUser) {
    this.user = user
  }
}