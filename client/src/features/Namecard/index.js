import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadNamecardRequest } from './actions';

import Box from './components/Box';

class NamecardContainer extends Component {
  componentDidMount() {
    const { name } = this.props.match.params;
    this.props.load(name);
  }

  render() {
    const { status, entity } = this.props;
    if (status.success) {
      return <Box content={`${entity.name} loves donkeys`} />;
    }
    return null;
  }
}

const mapDispatchToProps = {
  load: loadNamecardRequest
};

const mapStateToProps = (state, props) => {
  const { name } = props.match.params;
  return {
    status: state.namecard.status,
    entity: state.namecard.entities && state.namecard.entities[name]
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NamecardContainer)
);
