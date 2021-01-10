import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children, h3Class, style }) => (
  <h3
    className={`${styles.heading3} ${h3Class}}`}
    style={style}
  >
    {children}
  </h3>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  h3Class: PropTypes.string,
  style: PropTypes.object,
};
View.defaultProps = {
  h3Class: '',
  style: null,
};

export default View;
