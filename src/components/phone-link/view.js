import React from 'react';
import styles from './styles.module.scss';

const View = ({ children, style }) => (
  <a
    className={styles.phone}
    href="tel:505-220-4076"
    style={style}
  >
    {children}
  </a>
);

export default View;
