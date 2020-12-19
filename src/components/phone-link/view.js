import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = () => (
  <a className={styles.phone} href="tel:505-220-4076">
    Call for a quote today
  </a>
);
View.propTypes = {};
View.defaultProps = {};

export default View;
