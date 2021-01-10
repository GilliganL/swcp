import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children, pClass, style }) => (
  <p
    className={`${styles.paragraph} ${pClass}`}
    style={style}
  >
    {children}
  </p>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  pClass: PropTypes.string,
  style: PropTypes.object,
};
View.defaultProps = {
  pClass: '',
  style: null,
};

export default View;
