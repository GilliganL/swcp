import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children }) => (
  <header className={styles.header}>
    {children}
  </header>
);
View.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
View.defaultProps = {};

export default View;
