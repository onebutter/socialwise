import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadNamecardRequest } from './actions';
import styles from './styles.css';

import Profile from './components/Profile';
import Services from './components/Services';

class NamecardContainer extends Component {
  componentDidMount() {
    const { username } = this.props.match.params;
    this.props.load(username);
  }

  render() {
    const { status, entity } = this.props;
    if (status.success) {
      return (
        <div className={styles.root}>
          <Profile content={entity.profile} />
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
  const { username } = props.match.params;
  return {
    status: state.namecard.status,
    entity: state.namecard.entities && state.namecard.entities[username]
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NamecardContainer)
);
