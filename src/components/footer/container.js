import React, { useState } from 'react';
import PropTypes from  'prop-types';
import FooterView from './view';

const FooterContainer = () => {

  return (
    <>
      {(sm) && <MobileNavView open={open} setOpen={setOpen} /> }
      {(!sm && l) && <NavView /> }
    </>
  );
};

export default FooterContainer;
