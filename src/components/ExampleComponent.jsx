import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exampleActions } from 'actions'

import Navigation from 'components/Navigation'

class ExampleComponent extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(exampleActions.loadSomething())
  }

  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navigation />
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Example loading!</h1>
        </main>
      </div>
    )
  }
}


export default connect()(ExampleComponent)
