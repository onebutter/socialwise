import React from 'react';
import styles from './styles.css';

const Service = ({ url, type }) => (
  <div className={styles.root}>
    <div className={styles.type}>{type}</div>
    <div className={styles.url}>{url}</div>
  </div>
);

export default Service;
