/**
 * Created by duong on 5/24/17.
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { CREATE_API } from './constants';
import { apiCreated, apiCreatingError } from './actions';
import { makeSelectName, makeSelectHosts, makeSelectUpstreamUrl } from './selectors'
import ApiService from 'components/Services/ApiService';

/**
 * Github repos request/response handler
 */
export function* apiCreating() {
  const name = yield select(makeSelectName());
  const hosts = yield select(makeSelectHosts());
  const upstreamUrl = yield select(makeSelectUpstreamUrl());

  const { response, error } = yield call(ApiService.create, { name: name, hosts: hosts, upstreamUrl: upstreamUrl });

  if (response){
    yield put(apiCreated(response));
    forwardTo('/apis');
  }else {
    yield put(apiCreatingError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* createApi() {
  yield takeLatest(CREATE_API, apiCreating)
}

function forwardTo(location) {
  browserHistory.push(location);
}

// Bootstrap sagas
export default [
  createApi,
];
