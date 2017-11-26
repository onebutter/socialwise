import React, { Component } from 'react';
import Aliases from '../Aliases';
import styles from './styles.css';

class Profile extends Component {
  render() {
    const { username, aliases } = this.props.content;
    return (
      <div className={styles.root}>
        <div className={styles.username}>{username}</div>
        <Aliases content={aliases} />
      </div>
    );
  }
}

export default Profile;
