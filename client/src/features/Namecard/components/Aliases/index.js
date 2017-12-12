import React from 'react';
import Alias from '../Alias';
import styles from './styles.css';

const Aliases = ({ content }) => {
  const aliases = content.map((alias, i) => {
    return <Alias key={i} value={alias.value} type={alias.type} />;
  });
  return <div className={styles.root}>{aliases}</div>;
};

export default Aliases;
