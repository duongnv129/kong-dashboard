/**
 * Created by duong on 5/24/17.
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { CREATE_API } from './constants';
import { apiCreated, apiCreatingError } from './actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* apiCreating(action) {
  const api = action.api;
  console.log(api);
  const requestURL = 'http://localhost:8001/apis';
  try {
    const api = yield call(request, requestURL);
    yield put(apiCreated(api));
  } catch (err) {
    yield put(apiCreatingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* createApi() {
  yield takeLatest(CREATE_API, apiCreating)
}

// Bootstrap sagas
export default [
  createApi,
];
