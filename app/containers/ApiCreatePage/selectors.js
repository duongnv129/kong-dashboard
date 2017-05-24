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

export {
  selectApiCreate,
  makeSelectApi,
  makeSelectLoading,
  makeSelectError
};
