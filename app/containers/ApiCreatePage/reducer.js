/**
 * Created by duong on 5/24/17.
 */

import { fromJS } from 'immutable';

import {
  CREATE_API,
  CREATE_API_SUCCESS,
  CREATE_API_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  api: false,
  apiCreateLoading: false,
  apiCreatingError: false,
  name: '',
  host: '',
  upstream: ''
});

function apiCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_API:
      return state
        .set('apiCreateLoading', true)
        .set('apiCreatingError', false)
        .set('api', false);
    case CREATE_API_SUCCESS:
      return state
        .set('apiCreateLoading', false)
        .set('api', action.api);
    case CREATE_API_ERROR:
      return state
        .set('apiCreateLoading', false)
        .set('apiCreatingError', action.error);
    default:
      return state;
  }
}

export default apiCreateReducer;
