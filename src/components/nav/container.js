import React, { useState } from 'react';
import PropTypes from  'prop-types';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import NavView from './view';
import MobileNavView from './view-mobile';

const NavContainer = () => {
  const { xs, sm, l } = useBreakpoint();
  const [open, setOpen] = useState(false);
  console.log(xs, sm, l)
  return (
    <>
      {(sm) && <MobileNavView open={open} setOpen={setOpen} xs={xs} /> }
      {(!sm && l) && <NavView /> }
    </>
  );
};

export default NavContainer;
