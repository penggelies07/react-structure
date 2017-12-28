import * as React from 'react'

export interface ITwoProps {}

export interface ITwoState {}

export default class Two extends React.Component<ITwoProps, ITwoState> {

  constructor (props: ITwoProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='Two'>
        <h1>Two</h1>
      </div>
    )
  }
}