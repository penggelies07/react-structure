import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {renderRoutes, RouteConfig} from 'react-router-config'
import {Link} from 'react-router-dom'
import './One.less'

export interface IOneProps extends RouteComponentProps<any> {
  route: RouteConfig
}

export interface IOneState {}

export default class One extends React.Component<IOneProps, IOneState> {

  constructor (props: IOneProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='One'>
        <h1>One</h1>
        <Link to='/one/child'>OneChild</Link>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}