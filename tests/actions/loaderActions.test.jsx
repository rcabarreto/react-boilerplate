import { loaderActions } from 'actions'
import { loaderConstants } from 'constants/index'

describe('actions', () => {
  it('should create an action to show the loader spinner', () => {
    const expectedAction = {
      type: loaderConstants.LOADER_SHOW,
    }
    expect(loaderActions.showLoader()).toEqual(expectedAction)
  })

  it('should create an action to hide the loader spinner', () => {
    const expectedAction = {
      type: loaderConstants.LOADER_HIDE,
    }
    expect(loaderActions.hideLoader()).toEqual(expectedAction)
  })

  it('should create an action to TOGGLE the loader spinner', () => {
    const expectedAction = {
      type: loaderConstants.TOGGLE_LOADER,
    }
    expect(loaderActions.toggleLoader()).toEqual(expectedAction)
  })
})
