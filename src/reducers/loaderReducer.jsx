import { loaderConstants } from 'constants/index'

export default (state = false, action) => {
  switch (action.type) {
  case loaderConstants.LOADER_SHOW:
    return true
  case loaderConstants.LOADER_HIDE:
    return false
  default:
    return state
  }
}
