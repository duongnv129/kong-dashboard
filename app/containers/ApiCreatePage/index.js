/**
 * Created by duong on 5/24/17.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Form from './Form';
import { createApi, changeApiName, changeApiHosts, changeApiUpstreamUrl } from './actions';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectApi,
  makeSelectName,
  makeSelectHosts,
  makeSelectUpstreamUrl,
} from './selectors';

export class ApiCreatePage extends React.PureComponent {

  componentDidMount() {
  }

  render() {
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={this.props.name}
                  onChange={this.props.onChangeName}
                />
              </div>

              <div className="form-group">
                <label>Host</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Host"
                  name="hosts"
                  value={this.props.hosts}
                  onChange={this.props.onChangeHost}
                />
              </div>

              <div className="form-group">
                <label>Upstream</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Upstream"
                  name="upstreamUrl"
                  value={this.props.upstreamUrl}
                  onChange={this.props.onChangeUpstream}
                />
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
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  api: React.PropTypes.object,
  onSubmitForm: React.PropTypes.func,
  onChangeName: React.PropTypes.func,
  onChangeHosts: React.PropTypes.func,
  onChangeUpstreamUrl: React.PropTypes.func,
  name: React.PropTypes.string,
  hosts: React.PropTypes.string,
  upstreamUrl: React.PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(createApi());
    },
    onChangeName: (evt) => dispatch(changeApiName(evt.target.value)),
    onChangeHost: (evt) => dispatch(changeApiHosts(evt.target.value)),
    onChangeUpstream: (evt) => dispatch(changeApiUpstreamUrl(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  api: makeSelectApi(),
  name: makeSelectName(),
  hosts: makeSelectHosts(),
  upstreamUrl: makeSelectUpstreamUrl(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiCreatePage);
