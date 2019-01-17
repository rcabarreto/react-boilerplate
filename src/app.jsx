/* global document */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import router from 'router';

// import * as configureStore from 'configureStore'
// const store = configureStore.configure();

// App Styles
import 'applicationStyles'

import App from 'components/App'

ReactDOM.render(
  <App />,
  document.getElementById('app'),
)
