/**
 * Created by duong on 5/24/17.
 */

import React from 'react';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';

export class ApiListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the Apisitory
    const content = (
      <div className="col-lg-3">
        {item.name}
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={item.name} item={content}/>
    );
  }
}

ApiListItem.propTypes = {
  item: React.PropTypes.object
};

export default (ApiListItem);
