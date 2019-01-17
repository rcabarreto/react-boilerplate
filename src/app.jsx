import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import router from 'router';

import * as configureStore from 'configureStore'

const store = configureStore.configure();

// App css
import 'applicationStyles'

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('myApp')
);
