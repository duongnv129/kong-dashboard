/**
 * NewApiPage selectors
 */

import { createSelector } from 'reselect';

const selectNewApi = (state) => state.get('newApi');

const makeSelectApi = () => createSelector(
  selectNewApi,
  (newApiState) => newApiState.get('api')
);

const makeSelectLoading = () => createSelector(
  selectNewApi,
  (newApiState) => newApiState.get('loading')
);

const makeSelectError = () => createSelector(
  selectNewApi,
  (newApiState) => newApiState.get('error')
);


export {
  selectNewApi,
  makeSelectApi,
  makeSelectLoading,
  makeSelectError
};
