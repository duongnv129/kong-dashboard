/**
 * Created by duong on 5/24/17.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';

import ApisList from 'components/ApisList';

import { makeSelectLoading, makeSelectError, makeSelectApi } from './selectors';
import { loadApis } from './actions';

export class ApiPage extends React.PureComponent {

  componentDidMount() {
    this.props.getApiList();
  }

  render() {
    const { loading, error, apis } = this.props;
    const apisListProps = {
      loading,
      error,
      apis
    };

    return (
      <div className="container-fluid">
        <Helmet
          title="APIs Page"
          meta={[
            { name: 'description', content: 'Kong Dashboard application api page' },
          ]}
        />
        <div className="row">
          <div className="col-lg-12">
            <Link to="/apis/new">Add</Link>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-2">Name</div>
              <div className="col-lg-2">Host</div>
            </div>
          </div>
          <ApisList {...apisListProps} />
        </div>
      </div>
    );
  }
}

ApiPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  apis: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  getApiList: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getApiList: () => {
      dispatch(loadApis());
    }
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectLoading(),
  apis: makeSelectApi(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiPage);
