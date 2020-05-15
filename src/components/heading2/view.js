import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ title }) => (
  <h2 className={styles.heading2}>{title}</h2>
);
View.propTypes = {
  title: PropTypes.string.isRequired,
};
View.defaultProps = {};

export default View;
