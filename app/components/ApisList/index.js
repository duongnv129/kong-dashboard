/**
 * Created by duong on 5/24/17.
 */
import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import ApiListItem from 'containers/ApiListItem';

function ApisList({ loading, error, apis }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (apis !== false) {
    return <List items={apis} component={ApiListItem} />;
  }

  return null;
}

ApisList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  apis: PropTypes.any,
};

export default ApisList;
