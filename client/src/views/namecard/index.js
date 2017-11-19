import React, { Component } from 'react';
import styles from './styles.css';
import Namecard from 'Features/Namecard';

export default class NamecardView extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Namecard />
      </div>
    );
  }
}
