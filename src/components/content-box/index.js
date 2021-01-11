import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ContentBox50 = ({ children }) => (
  <section className={`${styles.contentBox50}`}>
    {children}
  </section>
);
ContentBox50.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

const ContentBox100 = ({ children }) => (
  <section className={`${styles.contentBox100}`}>
    {children}
  </section>
);
ContentBox100.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export { ContentBox50, ContentBox100 };
