import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PanelView50 = ({ children }) => (
  <section className={`${styles.contentBox50}`}>
    {children}
  </section>
);
PanelView50.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

const PanelView100 = ({ children }) => (
  <section className={`${styles.contentBox100}`}>
    {children}
  </section>
);
PanelView100.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export { PanelView50, PanelView100 };
