import * as LOGIN from '../actionTypes/Login';

const initialState = {
  loginData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.GET_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN.GET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginData: action.loginData,
      };
    case LOGIN.GET_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
