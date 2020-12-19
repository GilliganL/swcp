import { Link } from "gatsby"
import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav';
import styles from './styles.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <div className={styles.logo}>
        <Link
          className={styles.logoLink}
          to="/"
        >
          Southwest Construction Parts
        </Link>
      </div>
      <Nav />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
