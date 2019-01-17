import { loaderConstants } from 'constants/index'

export default {
  showLoader() {
    return { type: loaderConstants.LOADER_SHOW }
  },
  hideLoader() {
    return { type: loaderConstants.LOADER_HIDE }
  },
  toggleLoader() {
    return { type: loaderConstants.TOGGLE_LOADER }
  },
}
