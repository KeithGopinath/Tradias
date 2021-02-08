import * as types from '../actionTypes/Login';

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};
