import { Link } from "gatsby"
import React from 'react';
import Nav from '../nav-menu';
import styles from './styles.module.scss';

const NavBar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbarContent}>
      <div className={styles.logo}>
        <Link
          className={styles.logoLink}
          to="/"
        >
          Southwest Construction Parts
        </Link>
      </div>
      <Nav />
    </div>
  </nav>
);

export default NavBar;
