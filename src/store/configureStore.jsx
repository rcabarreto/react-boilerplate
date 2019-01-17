import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { loaderReducer } from 'reducers'

export default (initialState = {}) => {
  const reducer = combineReducers({
    loader: loaderReducer,
  })

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ))

  return store
}
