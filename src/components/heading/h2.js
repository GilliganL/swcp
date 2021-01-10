import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children, h2Class, style }) => (
  <h2
    className={`${styles.heading2} ${h2Class}`}
    style={style}
  >
    {children}
  </h2>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  h2Class: PropTypes.string,
  style: PropTypes.object,
};
View.defaultProps = {
  h2Class: '',
  style: null,
};

export default View;
