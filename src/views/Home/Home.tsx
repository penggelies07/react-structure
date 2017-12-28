import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {renderRoutes, RouteConfig} from 'react-router-config'
import Nav from '../../components/Nav'
import './Home.less'

export interface IHomeProps extends RouteComponentProps<any> {
  route: RouteConfig
}

export interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {

  constructor (props: IHomeProps) {
    super(props)
    this.state = {}
    console.log(this.props)
  }

  render () {
    return (
      <div className='Home'>
        <h1>Home</h1>
        <Nav/>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}