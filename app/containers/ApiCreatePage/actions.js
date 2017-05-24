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
  CREATE_API,
  CREATE_API_SUCCESS,
  CREATE_API_ERROR,
  CHANGE_API_NAME,
  CHANGE_API_HOST,
  CHANGE_API_UPSTREAM
} from './constants';

/**
 * Changes the input field of the form
 * *
 * @return {object}    An action object with a type of LOAD_APIS
 */
export function createApi(api) {
  return {
    type: CREATE_API,
    api
  };
}

export function apiCreated(api) {
  return {
    type: CREATE_API_SUCCESS,
    api
  }
}

export function apiCreatingError(error) {
  return {
    type: CREATE_API_ERROR,
    error
  }
}

export function changeApiName(name) {
  return {
    type: CHANGE_API_NAME,
    name
  }
}

export function changeApiHost(host) {
  return {
    type: CHANGE_API_HOST,
    host
  }
}

export function changeApiUpstream(upstream) {
  return {
    type: CHANGE_API_UPSTREAM,
    upstream
  }
}
