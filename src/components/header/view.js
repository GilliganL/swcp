import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children }) => (
  <header className={styles.header}>
    {children}
  </header>
);
View.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
View.defaultProps = {};

export default View;
