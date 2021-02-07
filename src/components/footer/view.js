import React from 'react';
import RightArrow from '../../assets/rightArrow.svg';
import styles from './styles.module.scss';

const FooterView = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      © {new Date().getFullYear()}
      <a className={styles.value} href="mailto:scparts@comcast.net">
        scparts@comcast.net
      </a>
      <a className={styles.value} href="tel:505-220-4076">
        505-220-4076
      </a>
      <a href="tel:505-220-4076" className={styles.footerText}>
        Call us to order
        <RightArrow className={styles.footerText__arrow} />
      </a>
  </div>
</footer>
);

export default FooterView;
