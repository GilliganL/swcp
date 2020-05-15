import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '../../hooks/use-breakpoints';
import View from './view';

const Container = () => {
  const [breakpoint] = useBreakpoints();

  return (
    <View
      breakpoint={breakpoint}
    />
  )
};
Container.propTypes = {};
Container.defaultProps = {};

export default Container;
