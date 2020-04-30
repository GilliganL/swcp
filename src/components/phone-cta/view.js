import React from 'react';
import styles from './styles.module.scss';

const PhoneCTA = () => (
  <div className={styles.phoneWrapper}>
    <a className={styles.phoneLink} href="tel:505-220-4076">
      <img className={styles.phone} height={40} src="/assets/gearPhone.svg" width={40} />
    </a>
  </div>
);

export default PhoneCTA;
