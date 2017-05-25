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
  (apiCreateState) => apiCreateState.getIn(['api', 'name'])
);

const makeSelectHosts = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.getIn(['api', 'hosts'])
);

const makeSelectUpstreamUrl = () => createSelector(
  selectApiCreate,
  (apiCreateState) => apiCreateState.getIn(['api', 'upstreamUrl'])
);

export {
  selectApiCreate,
  makeSelectApi,
  makeSelectLoading,
  makeSelectError,
  makeSelectName,
  makeSelectHosts,
  makeSelectUpstreamUrl
};
