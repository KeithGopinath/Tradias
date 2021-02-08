import * as LOGIN from '../actionTypes/Login';

export function getLogin() {
  return {
    type: LOGIN.GET_LOGIN,
  };
}

export function getLoginSucccess(loginSuccess) {
  return {
    type: LOGIN.GET_LOGIN_SUCCESS,
    loginSuccess,
  };
}

export function getLoginFailure(error) {
  return {
    type: LOGIN.GET_LOGIN_FAILURE,
    error,
  };
}
