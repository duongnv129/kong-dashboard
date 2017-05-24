/**
 * Created by duong on 5/24/17.
 */

import { fromJS } from 'immutable';

import {
  LOAD_API,
  LOAD_API_SUCCESS,
  LOAD_API_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  api: [],
  api_loading: false,
  api_error: false
});

function newApiReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_API:
      return state
        .set('api_loading', true)
        .set('api_error', false)
        .set('api', false);
    case LOAD_API_SUCCESS:
      return state
        .set('api_loading', false)
        .set('api', action.apis);
    case LOAD_API_ERROR:
      return state
        .set('api_loading', false)
        .set('api_error', action.error);
    default:
      return state;
  }
}

export default newApiReducer;
