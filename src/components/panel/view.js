import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles.module.scss';

// themes: Blue

const PanelView = ({
  breakpoint, children, columns,
}) => ( 
  <section className={`${styles.panelWrapper}`}>
      <div
        className={`
          ${styles.panel}
          ${columns ? styles.panelColumns : ''}
        `}
        >
        {children}
      </div>
  </section>
);
PanelView.propTypes = {
  columns: PropTypes.bool,
  contentList: PropTypes.string,
};
PanelView.defaultProps = {
  columns: null,
  contentList: null,
};

export default PanelView;
