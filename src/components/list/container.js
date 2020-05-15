import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '../../hooks/use-breakpoints';
import View from './view';

const Container = ({ list }) => {
  const [breakpoint] = useBreakpoints();
  const maxHeight = {
    mobile: `${list.length * 14}px`
  }

  return (
    <View
      breakpoint={breakpoint}
      length={list.length}
      list={list}
      maxHeight={maxHeight[breakpoint]}
    />
  )
};
Container.propTypes = {};
Container.defaultProps = {};

export default Container;
