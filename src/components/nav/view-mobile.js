import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const MobileNavView = ({ open, setOpen }) => (
  <nav className={`${styles.nav} ${open ? styles.navActive : ''}`}>
    <button
      className={styles.burgerButton}
      onClick={() => setOpen(!open)}
      role="button" 
    >
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </button>
  </nav>
);
MobileNavView.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MobileNavView;
