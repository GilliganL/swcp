import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FooterView = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      © {new Date().getFullYear()}
      <p className={styles.footerText}>
        Give us a call
        <img className={styles.footerText__arrow} src="/assets/rightArrow.svg" />
      </p>
  </div>
</footer>
);

export default FooterView;
