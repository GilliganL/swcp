import { Link } from "gatsby"
import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav';
import styles from './styles.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <h1 className={styles.logo}>
        <Link
          className={styles.logoLink}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
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
