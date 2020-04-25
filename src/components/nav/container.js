import React, { useState } from 'react';
import PropTypes from  'prop-types';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import NavView from './view';
import MobileNavView from './view-mobile';

const NavContainer = () => {
  const { sm, l } = useBreakpoint();
  const [open, setOpen] = useState(false);

  return (
    <>
      {(sm) && <MobileNavView open={open} setOpen={setOpen} /> }
      {(!sm && l) && <NavView /> }
    </>
  );
};

export default NavContainer;
