import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { loaderReducer, userReducer } from 'reducers'

export var configure = (initialState = {}) => {

  let reducer = combineReducers({
    loader: loaderReducer,
    user: userReducer
  });

  let store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
