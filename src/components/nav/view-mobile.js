import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MobileNavView = ({ open, setOpen, xs }) => (
  <nav className={`${styles.nav} ${open ? styles.navActive : ''}`}>
    {!xs && (
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
        <li>Contact</li>
        <li>About</li>
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
