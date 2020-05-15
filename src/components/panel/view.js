import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles.module.scss';

// themes: Blue

const PanelView = ({
  breakpoint, children, contentList, theme,
}) => ( 
  <section className={`${styles.panel} ${theme ? styles[`panel${theme}`] : ''}`}>
    {children}
    {contentList && (
      <p className={styles.panelContentList}>
        {contentList}
      </p>
    )}
  </section>
);
PanelView.propTypes = {
  contentList: PropTypes.string,
  theme: PropTypes.string,
};
PanelView.defaultProps = {
  contentList: null,
  theme: null,
};

export default PanelView;
