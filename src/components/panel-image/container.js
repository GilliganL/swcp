import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '../../hooks/use-breakpoints';
import PanelView from './view';

const PanelContainer = ({
  children, image,
}) => {
  const [breakpoint] = useBreakpoints();

  return (
    <PanelView
      breakpoint={breakpoint}
      image={image}
    >
      {children}
    </PanelView>
  )
};
PanelContainer.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
};
PanelContainer.defaultProps = {};

export default PanelContainer;
