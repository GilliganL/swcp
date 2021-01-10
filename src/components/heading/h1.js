import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children, h1Class, style }) => (
  <h1
    className={`${styles.heading1} ${h1Class}}`}
    style={style}
  >
    {children}
  </h1>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  h1Class: PropTypes.string,
  style: PropTypes.object,
};
View.defaultProps = {
  h1Class: '',
  style: null,
};

export default View;
