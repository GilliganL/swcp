import React from 'react';
import RightArrow from '../../assets/rightArrow.svg';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FooterView = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      © {new Date().getFullYear()}
      <p className={styles.footerText}>
        Call us to order
        <RightArrow className={styles.footerText__arrow} />
      </p>
  </div>
</footer>
);

export default FooterView;
