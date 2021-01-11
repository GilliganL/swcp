import React from 'react';
import { H2 } from '../heading';
import styles from './styles.module.scss';

const ContactPage = ({
  address, email, fax, phone,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.info}>
      <div className={styles.column}>
        <ul class={styles.listWrapper}>
          <H2 h2Class={styles.title}>Hours</H2>
          <li className={styles.row}>
            <p className={styles.label}>
              Monday - Friday
            </p>
            <p className={styles.value}>
              7:30 A.M. - 4:30 P.M.
            </p>
          </li>
        </ul>
        <ul class={styles.listWrapper}>
          <H2 h2Class={styles.title}>Contact Information</H2>
          <li className={styles.row}>
            <p className={styles.label}>
              Email
            </p>
            <a className={styles.value} href="mailto:scparts@comcast.net">
              {email}
            </a>
          </li>
          <li className={styles.row}>
            <p className={styles.label}>
              Phone
            </p>
            <a className={styles.value} href="tel:505-220-4076">
              {phone}
            </a>
          </li>
          <li className={styles.row}>
            <p className={styles.label}>
              Fax
            </p>
            <a className={styles.value} href="tel:505-220-4076">
              {fax}
            </a>
          </li>
          <li className={styles.row}>
            <p className={styles.label}>
              Address
            </p>
            <p className={styles.value}>
              {address}
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.mapWrapper}>
      <iframe
          allowFullScreen=""
          aria-hidden="false"
          className={styles.map}
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.9128896663574!2d-106.60506108475538!3d35.158793180319414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8722734c158491ed%3A0xd221fed649eb8bf8!2sSouthwest%20Construction%20Parts!5e0!3m2!1sen!2sus!4v1603756983618!5m2!1sen!2sus"
          title="Map to Southwest Construction Parts Main Office"
        />
      </div>
    </div>
  </div>
);

export default ContactPage;
