import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ content, style }) => (
  <p className={styles.paragraph} style={style}>
    {content}
  </p>
);
View.propTypes = {};
View.defaultProps = {};

export default View;
