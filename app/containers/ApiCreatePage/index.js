/**
 * Created by duong on 5/24/17.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError } from './selectors';
import Form from './Form';
import { createApi } from './actions';

export class ApiCreatePage extends React.PureComponent {

  componentDidMount() {
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
          <div className="col-lg-6 col-lg-offset-3">
            <Form onSubmit={this.props.onSubmitForm}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" name="name" />
              </div>

              <div className="form-group">
                <label>Host</label>
                <input type="text" className="form-control" placeholder="Host" name="host" />
              </div>

              <div className="form-group">
                <label>Upstream</label>
                <input type="text" className="form-control" placeholder="Upstream" name="upstream" />
              </div>

              <div>
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

ApiCreatePage.propTypes = {
  apiCreateLoading: React.PropTypes.bool,
  apiCreateLoadingError: React.PropTypes.oneOfType([
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
      console.log(evt);
      dispatch(createApi({ name: 'test' }));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  apiCreateLoading: makeSelectLoading(),
  apiCreateLoadingError: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiCreatePage);
