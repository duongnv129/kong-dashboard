/**
 * Created by duong on 5/24/17.
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_APIS } from './constants';
import { apisLoaded, apisLoadingError } from './actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getApis() {
  const requestURL = 'http://10.10.1.118:8001/apis';

  try {
    const result = yield call(request, requestURL);
    yield put(apisLoaded(result.data, result.total));
  } catch (err) {
    yield put(apisLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apis() {
  yield takeLatest(LOAD_APIS, getApis)
}

// Bootstrap sagas
export default [
  apis,
];
