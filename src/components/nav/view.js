import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const NavView = () => (
  <nav className={styles.nav}>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <a className={styles.navPhone} href="tel:505-220-4076">
      (505) 220-4076
    </a>
  </nav>
);

export default NavView;
