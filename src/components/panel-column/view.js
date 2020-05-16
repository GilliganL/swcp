import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ children }) => (
  <div className={styles.column}>
    {children}  
  </div>
);
View.propTypes = {
  children: PropTypes.node.isRequired,
};
View.defaultProps = {};

export default View;
