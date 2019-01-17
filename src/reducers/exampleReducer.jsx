import { exampleConstants } from 'constants/index'

export default (state = false, action) => {
  switch (action.type) {
  case exampleConstants.LOADER_SHOW:
    return true
  case exampleConstants.LOADER_HIDE:
    return false
  default:
    return state
  }
}
