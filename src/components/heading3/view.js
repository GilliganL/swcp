import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const View = ({ style, subTitle }) => (
  <h3 className={styles.heading3} style={style}>{subTitle}</h3>
);
View.propTypes = {};
View.defaultProps = {};

export default View;
