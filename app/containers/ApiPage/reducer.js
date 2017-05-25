/**
 * Created by duong on 5/24/17.
 */

import { fromJS } from 'immutable';

import {
  LOAD_APIS,
  LOAD_APIS_SUCCESS,
  LOAD_APIS_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  apis: false,
  total: 0,
  loading: false,
  error: false
});

function apiReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APIS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_APIS_SUCCESS:
      return state
        .set('loading', false)
        .set('apis', action.apis)
        .set('total', action.total);
    case LOAD_APIS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default apiReducer;
