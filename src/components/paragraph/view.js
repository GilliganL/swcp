import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children, style }) => (
  <p className={styles.paragraph} style={style}>
    {children}
  </p>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};
View.defaultProps = {
  style: null,
};

export default View;
