import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/loginService';
import * as types from '../actionTypes/Login'

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}