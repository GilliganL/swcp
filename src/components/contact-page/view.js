import React from 'react';
import styles from './styles.module.scss';

const ContactPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.info}>
      <div className={styles.column}>
        <ul>
          <p className={styles.title}>Hours</p>
          <li className={styles.row}>
            <p className={styles.label}>
              Monday - Friday
            </p>
            <p className={styles.value}>
              7:30 A.M. - 4:30 A.M.
            </p>
          </li>
        </ul>
        <ul>
        <p className={styles.title}>Contact Information</p>
          <li className={styles.row}>
            <p className={styles.label}>
              Email
            </p>
            <a className={styles.value} href="mailto:scparts@comcast.net">
              scparts@comcast.net
            </a>
          </li>
          <li className={styles.row}>
            <p className={styles.label}>
              Phone
            </p>
            <a className={styles.value} href="tel:505-220-4076">
              505-220-4076
            </a>
          </li>
          <li className={styles.row}>
            <p className={styles.label}>
              Fax
            </p>
            <a className={styles.value} href="tel:505-220-4076">
              505 242-6820
            </a>
          </li>
          <li className={styles.row}>
            <p className={styles.label}>
              Address
            </p>
            <p className={styles.value}>
              3801 Academy Pkwy N NE, Albuquerque, NM 87109
            </p>
          </li>
        </ul>
      </div>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.9128896663574!2d-106.60506108475538!3d35.158793180319414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8722734c158491ed%3A0xd221fed649eb8bf8!2sSouthwest%20Construction%20Parts!5e0!3m2!1sen!2sus!4v1603756983618!5m2!1sen!2sus"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        title="Map to Southwest Construction Parts Main Office"
      />
    </div>
  </div>
);

export default ContactPage;
