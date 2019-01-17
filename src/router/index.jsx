import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoaderWraper from 'components/LoaderWraper'

import App from 'components/App'
import ExampleComponent from 'components/ExampleComponent'

const NoMatch = ({ location }) => (

  <div className="container-fluid">
    <div className="row">
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">404 - Page not Found</h1>
        </div>
        <div className="page-description">
          The page you were looking for could not be found.
          No match for <code>{location.pathname}</code>
        </div>
      </main>
    </div>
  </div>
)

NoMatch.propTypes = {
  location: PropTypes.string.isRequired,
}

export default (
  <Router>
    <div className="container-fluid">
      <LoaderWraper />
      <Switch>
        <Route path="/example" component={ExampleComponent} />
        <Route exact path="/" component={App} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)
