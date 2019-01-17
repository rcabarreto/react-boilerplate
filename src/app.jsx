/* global document */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import router from 'router'

import configureStore from 'store/configureStore'
import 'styles/app.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app'),
)
