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
  apis: [],
  apis_loading: false,
  apis_error: false
});

function apiReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APIS:
      return state
        .set('apis_loading', true)
        .set('apis_error', false)
        .set('apis', false);
    case LOAD_APIS_SUCCESS:
      return state
        .set('apis_loading', false)
        .set('apis', action.apis);
    case LOAD_APIS_ERROR:
      return state
        .set('apis_loading', false)
        .set('apis_error', action.error);
    default:
      return state;
  }
}

export default apiReducer;
