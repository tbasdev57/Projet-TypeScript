import * as React   from 'react'
import {
  Props,
  State,
}                   from './types'

class HomePage extends React.Component<Props, State> {
  state: State

  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render(): JSX.Element {
    return (
      <div>HomePage</div>
    )
  }
}

export default HomePage