import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const NavView = () => (
  <nav>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default NavView;
