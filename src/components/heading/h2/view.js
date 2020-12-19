import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children, style }) => (
  <h2 className={styles.heading2} style={style}>
    {children}
  </h2>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};
View.defaultProps = {
  style: null,
};

export default View;
