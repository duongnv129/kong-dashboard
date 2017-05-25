/**
 * Created by duong on 5/25/17.
 */

import { createSelector } from 'reselect';

const selectApi = (state) => state.get('api');

const makeSelectApi = () => createSelector(
  selectApi,
  (apiState) => apiState.get('apis')
);

const makeSelectLoading = () => createSelector(
  selectApi,
  (apiState) => apiState.get('loading')
);

const makeSelectError = () => createSelector(
  selectApi,
  (apiState) => apiState.get('error')
);

export {
  selectApi,
  makeSelectApi,
  makeSelectLoading,
  makeSelectError,
};
