/**
 * NewApiPage selectors
 */

import { createSelector } from 'reselect';

const selectApiCreate = (state) => state.get('apiCreate');

const makeSelectApi = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.get('api')
);

const makeSelectLoading = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.get('loading')
);

const makeSelectError = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.get('error')
);

const makeSelectName = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.get('name')
);

const makeSelectHost = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.get('host')
);

const makeSelectUpstream = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.get('upstream')
);

export {
  selectApiCreate,
  makeSelectApi,
  makeSelectLoading,
  makeSelectError,
  makeSelectName,
  makeSelectHost,
  makeSelectUpstream
};
