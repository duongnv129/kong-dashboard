/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_API,
  LOAD_API_SUCCESS,
  LOAD_API_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 * *
 * @return {object}    An action object with a type of LOAD_APIS
 */
export function loadApi() {
  return {
    type: LOAD_API,
  };
}

export function apiLoaded(api) {
  return {
    type: LOAD_API_SUCCESS,
    api
  }
}

export function apiLoadingError(error) {
  return {
    type: LOAD_API_ERROR,
    error
  }
}
