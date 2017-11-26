import React, { Component } from 'react';
import Alias from '../Alias';
import styles from './styles.css';

class Aliases extends Component {
  render() {
    const aliases = this.props.content.map((alias, i) => {
      return <Alias key={i} value={alias.value} type={alias.type} />;
    });
    return <div className={styles.root}>{aliases}</div>;
  }
}

export default Aliases;
