/**
 * Created by duong on 5/24/17.
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_API } from './constants';
import { apiLoaded, apiLoadingError } from './actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getApi(action) {
  const apiName = action.apiName;
  const requestURL = `http://localhost:8001/apis/${apiName}`;
  try {
    const api = yield call(request, requestURL);
    yield put(apiLoaded(api));
  } catch (err) {
    yield put(apiLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* api() {
  yield takeLatest(LOAD_API, getApi)
}

// Bootstrap sagas
export default [
  api,
];
