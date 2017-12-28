import * as React from 'react'
import {Link} from 'react-router-dom'
import './Nav.less'

export interface INavProps {}

export interface INavState {}

export default class Nav extends React.Component<INavProps, INavState> {

  constructor (props: INavProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ul className='Nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/one'>One</Link></li>
        <li><Link to='/two'>Two</Link></li>
    </ul>
    )
  }
}