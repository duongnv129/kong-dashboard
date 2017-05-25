/**
 * Created by duong on 5/25/17.
 */

import { createSelector } from 'reselect';

const selectApi = (state) => state.get('api');

const makeSelectApi = () => createSelector(
  selectApi,
  (apiState) => apiState.get('api')
);

const makeSelectLoading = () => createSelector(
  selectApi,
  (apiState) => apiState.get('loading')
);

const makeSelectError = () => createSelector(
  selectApi,
  (apiState) => apiState.get('error')
);

const makeSelectName = () => createSelector(
  selectApi,
  (apiState) => apiState.getIn(['api', 'name'])
);

const makeSelectHosts = () => createSelector(
  selectApi,
  (apiState) => apiState.getIn(['api', 'hosts'])
);

const makeSelectUpstreamUrl = () => createSelector(
  selectApi,
  (apiState) => apiState.getIn(['api', 'upstreamUrl'])
);

export {
  selectApi,
  makeSelectApi,
  makeSelectLoading,
  makeSelectError,
  makeSelectName,
  makeSelectHosts,
  makeSelectUpstreamUrl
};
