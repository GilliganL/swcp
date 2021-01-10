import React from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.scss';

const NavView = () => (
  <nav className={styles.nav}>
    <Link className={styles.navLink} to="/contact/">Contact</Link>
    <Link className={styles.navLink} to="/about/">About</Link>
    <a className={styles.navPhone} href="tel:505-220-4076">
      (505) 220-4076
    </a>
  </nav>
);

export default NavView;
