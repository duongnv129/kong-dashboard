/**
 * Created by duong on 5/24/17.
 */

import { fromJS } from 'immutable';

import {
  CREATE_API,
  CREATE_API_SUCCESS,
  CREATE_API_ERROR,
  CHANGE_API_NAME,
  CHANGE_API_HOSTS,
  CHANGE_API_UPSTREAM_URL
} from './constants';

// The initial state of the App
const initialState = fromJS({
  api: {
    name: '1',
    hosts: '1',
    upstreamUrl: '1'
  },
  loading: false,
  error: false,
});

function apiCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_API:
      return state
        .set('loading', true)
        .set('error', false);
    case CREATE_API_SUCCESS:
      return state
        .set('loading', false)
        .set('api', action.api);
    case CREATE_API_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case CHANGE_API_NAME:
      return state
        .setIn(['api', 'name'], action.name);
    case CHANGE_API_HOSTS:
      return state
        .setIn(['api', 'hosts'], action.hosts);
    case CHANGE_API_UPSTREAM_URL:
      return state
        .setIn(['api', 'upstreamUrl'], action.upstreamUrl);
    default:
      return state;
  }
}

export default apiCreateReducer;
