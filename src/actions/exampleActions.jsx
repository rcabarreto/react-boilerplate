import { exampleService } from 'services'
import { exampleConstants } from 'constants/index'
import { loaderActions } from 'actions'

export default {

  loadSomething() {
    const request = () => ({ type: exampleConstants.LOAD_EXAMPLE_REQUEST })
    const success = data => ({ type: exampleConstants.LOAD_EXAMPLE_SUCCESS, data })
    const failure = data => ({ type: exampleConstants.LOAD_EXAMPLE_FAILURE, data })

    return (dispatch) => {
      dispatch(request())
      dispatch(loaderActions.showLoader())

      exampleService.loadSomething().then((response) => {
        dispatch(success(response))
        dispatch(loaderActions.hideLoader())
      }, (err) => {
        dispatch(failure(err))
        dispatch(loaderActions.hideLoader())
      })
    }
  },

  toggleExample(status) {
    return { type: exampleConstants.LOAD_EXAMPLE_REQUEST, status: { ...status } }
  },

}
