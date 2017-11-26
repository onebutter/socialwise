import React, { Component } from 'react';
import styles from './styles.css';

class Profile extends Component {
  render() {
    const { content } = this.props;
    return <div className={styles.root}>{content}</div>;
  }
}

export default Profile;
