
export let authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return state;
    default:
      return state;
  }
};

export let loaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return true;
    case 'HIDE_LOADER':
      return false;
    default:
      return state;
  }
};

export let userReducer = (state = {}, action) => {

  switch (action.type) {
    case 'LOAD_USER':
      console.log('userReducer', action.user);
      return {
        ...action.user
      };
    default:
      return state;
  }
};
