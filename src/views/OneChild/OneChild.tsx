import * as React from 'react'

export interface IOneChildProps {}

export interface IOneChildState {}

export default class OneChild extends React.Component<IOneChildProps, IOneChildState> {

  constructor (props: IOneChildProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='OneChild'>
        <h3>OneChild</h3>
      </div>
    )
  }
}