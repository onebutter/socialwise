import React from 'react';
import Service from '../Service';
import styles from './styles.css';

const Services = ({ content }) => {
  const services = content.map((service, i) => {
    return <Service key={i} value={service.value} type={service.type} />;
  });
  return <div className={styles.root}>{services}</div>;
};

export default Services;
