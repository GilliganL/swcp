import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MobileNavView = ({ open, setOpen, breakpoint }) => (
  <nav className={`${styles.nav} ${open ? styles.navActive : ''}`}>
    {breakpoint === 'tablet' && (
      <a className={styles.navPhone} href="tel:505-220-4076">
        (505) 220-4076
      </a>
    )}
    <button
      className={styles.burgerButton}
      onClick={() => setOpen(!open)}
      role="button" 
    >
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </button>
    <div className={styles.menu}>
      <ul>
        <li><Link className={styles.navLink} to="/contact">Contact</Link></li>
        <li><Link className={styles.navLink} to="/about">About</Link></li>
        <li>
          <a className={styles.menuPhone} href="tel:505-220-4076">
            (505) 220-4076
          </a>
        </li>
      </ul>
    </div>
    <div className={styles.overlay} />
  </nav>
);
MobileNavView.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MobileNavView;
