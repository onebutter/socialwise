import React from 'react';
import Aliases from '../Aliases';
import styles from './styles.css';

const Profile = ({ content }) => {
  const { username, aliases } = content;
  return (
    <div className={styles.root}>
      <div className={styles.username}>@{username}</div>
      <Aliases content={aliases} />
    </div>
  );
};

export default Profile;
