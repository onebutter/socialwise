import React, { Component } from 'react';
import Service from '../Service';
import styles from './styles.css';

class Services extends Component {
  render() {
    const services = this.props.content.map((service, i) => {
      return <Service key={i} value={service.value} type={service.type} />;
    });
    return <div className={styles.root}>{services}</div>;
  }
}

export default Services;
