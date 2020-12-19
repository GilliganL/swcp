import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ style, children }) => (
  <h3 className={styles.heading3} style={style}>{children}</h3>
);
View.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};
View.defaultProps = {
  style: null,
};

export default View;
