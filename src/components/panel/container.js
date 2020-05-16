import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '../../hooks/use-breakpoints';
import PanelView from './view';

const PanelContainer = ({
  children, columns, theme,
}) => {
  const [breakpoint] = useBreakpoints();

  return (
    <PanelView
      breakpoint={breakpoint}
      columns={columns}
      theme={theme}
    >
      {children}
    </PanelView>
  )
};
PanelContainer.propTypes = {
  columns: PropTypes.bool,
  theme: PropTypes.string,
};
PanelContainer.defaultProps = {
  columns: null,
  theme: null,
};

export default PanelContainer;
