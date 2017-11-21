import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadNamecardRequest } from './actions';

import Box from './components/Box';

class NamecardContainer extends Component {
  render() {
    return <Box content={`${name} loves donkeys`} />;
  }
}

const mapDispatchToProps = {
  load: loadNamecardRequest
};

export default withRouter(connect(null, mapDispatchToProps)(NamecardContainer));
