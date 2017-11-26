import React from 'react';
import styles from './styles.css';

const Alias = ({ value, type }) => (
  <div className={styles.root}>
    <div className={styles.type}>{type}</div>
    <div className={styles.value}>{value}</div>
  </div>
);

export default Alias;
