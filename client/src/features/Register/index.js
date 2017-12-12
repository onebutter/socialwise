import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitCredentialRequest } from './actions';
import styles from './styles.css';

class RegisterContainer extends Component {
  render() {
    const { submit } = this.props;
    return <div className={styles.root}>form should go in here</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  submit: bindActionCreators(submitCredentialRequest, dispatch)
});

export default connect(null, mapDispatchToProps)(RegisterContainer);
