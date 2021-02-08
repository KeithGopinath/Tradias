import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as LOGIN from '../actionTypes/Login';
import * as loginActionCreators from '../actionCreators/Login';
import { doGet } from '../utils/fetchWrapper';


export function* getContacts() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getContacts);
    yield put(loginActionCreators.getContactsSucccess(response));
  } catch (error) {
    yield put(loginActionCreators.getContactsFailure(error));
  }
}

export function* contactsWatchers() {
  yield [
    takeLatest(LOGIN.GET_CONTACTS, getContacts),
  ];
}
