import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles.module.scss';

// themes: Blue

const PanelView = ({
  breakpoint, children, columns, theme,
}) => ( 
  <section 
    className={`
      ${styles.panel}
      ${theme ? styles[`panel${theme}`] : ''}
      ${columns ? styles.panelColumns : ''}
      `}
    >
    {children}
  </section>
);
PanelView.propTypes = {
  columns: PropTypes.bool,
  contentList: PropTypes.string,
  theme: PropTypes.string,
};
PanelView.defaultProps = {
  columns: null,
  contentList: null,
  theme: null,
};

export default PanelView;
