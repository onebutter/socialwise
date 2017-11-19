import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Box from './components/Box';

class NamecardContainer extends Component {
  render() {
    const { name } = this.props.match.params;
    return <Box content={`${name} loves donkeys`} />;
  }
}

export default withRouter(connect()(NamecardContainer));
