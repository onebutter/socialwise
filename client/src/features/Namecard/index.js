import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadNamecardRequest } from './actions';

import Profile from './components/Profile';
import Services from './components/Services';

class NamecardContainer extends Component {
  componentDidMount() {
    const { name } = this.props.match.params;
    this.props.load(name);
  }

  render() {
    const { status, entity } = this.props;
    if (status.success) {
      return (
        <div>
          <Profile content={entity.name} />
          <Services content={entity.services} />
        </div>
      );
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
