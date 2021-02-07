import React, { useState } from 'react';
import useBreakpoints from '../../hooks/use-breakpoints';
import NavView from './view';
import MobileNavView from './view-mobile';

const NavContainer = () => {
  const [breakpoint] = useBreakpoints();
  const [open, setOpen] = useState(false);
  return (
    breakpoint === 'desktop'
      ? <NavView />
      : <MobileNavView open={open} setOpen={setOpen} breakpoint={breakpoint} />
  );
};

export default NavContainer;
