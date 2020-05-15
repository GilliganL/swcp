import React, { useState } from 'react';
import PropTypes from  'prop-types';
import useBreakpoints from '../../hooks/use-breakpoints';
import NavView from './view';
import MobileNavView from './view-mobile';

const NavContainer = () => {
  const [breakpoint] = useBreakpoints();
  const [open, setOpen] = useState(false);
console.log(breakpoint)
  return (
    <>
      {breakpoint !== 'desktop' && <MobileNavView open={open} setOpen={setOpen} breakpoint={breakpoint} /> }
      {breakpoint === 'desktop' && <NavView /> }
    </>
  );
};

export default NavContainer;
