import React from 'react';
import styles from './styles.module.scss';
import Phone from '../../assets/gearPhone.svg';

const PhoneCTA = () => (
  <a className={styles.phoneWrapper} href="tel:505-220-4076" aria-label="Call us for a free quote">
    <Phone height={40} width={40} />
  </a>
);

export default PhoneCTA;
