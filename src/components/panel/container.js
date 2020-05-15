import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '../../hooks/use-breakpoints';
import PanelView from './view';

const PanelContainer = ({
  children, contentList, theme,
}) => {
  const [breakpoint] = useBreakpoints();

  return (
    <PanelView
      breakpoint={breakpoint}
      contentList={contentList}
      theme={theme}
    >
      {children}
    </PanelView>
  )
};
PanelContainer.propTypes = {
  content: PropTypes.string,
  contentList: PropTypes.string,
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string,
};
PanelContainer.defaultProps = {
  content: null,
  contentList: null,
  list: null,
  theme:null,
};

export default PanelContainer;
