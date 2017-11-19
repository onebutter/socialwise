import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NamecardContainer extends Component {
  render() {
    console.log(this.props);
    return <div>some garbo</div>;
  }
}

export default withRouter(connect()(NamecardContainer));
