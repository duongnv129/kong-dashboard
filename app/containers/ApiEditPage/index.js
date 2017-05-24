/**
 * Created by duong on 5/24/17.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError } from './selectors';
import Form from './Form';
import { loadApis } from '../ApiPage/actions';

export class ApiPage extends React.PureComponent {

  componentDidMount() {
    this.props.getApiList();
  }

  render() {
    const { apiLoading, apiLoadingError, api } = this.props;

    return (
      <div className="container-fluid">
        <Helmet
          title="New API Page"
          meta={[
            { name: 'description', content: 'Kong Dashboard application api page' },
          ]}
        />
        <div className="row">
          <div className="col-lg-12">
            <Form onSubmit={this.props.onSubmitForm}>
              <div className="form-group">
                <label></label>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

ApiPage.propTypes = {
  apiLoading: React.PropTypes.bool,
  apiLoadingError: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  api: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadApis());
    }
  };
}

const mapStateToProps = createStructuredSelector({
  apiLoading: makeSelectLoading(),
  apiLoadingError: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiPage);
