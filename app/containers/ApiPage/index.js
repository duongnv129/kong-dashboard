/**
 * Created by duong on 5/24/17.
 */

import React from 'react';
import Hamlet from 'react-helmet';

export class ApiPage extends React.PureComponent {

  componentDidMount() {

  }

  render() {
    const { apisLoading, apisLoadingError, apis } = this.props;
    const apisListProps = {
      loading: apisLoading,
      error: apisLoadingError,
      apis: apis
    };

    return (
      <div className="container-fluid">
        <Hamlet
          title="APIs Page"
          meta={[
            { name: 'description', content: 'Kong Dashboard application api page' },
          ]}
        />
      </div>
    );
  }
}

ApiPage.propTypes = {
  apisLoading: React.PropTypes.bool,
  apisLoadingError: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  apis: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool
  ])
};
