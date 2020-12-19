import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children, style }) => (
  <h1 className={styles.heading1} style={style}>{children}</h1>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};
View.defaultProps = {
  style: null,
};

export default View;
