import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FooterView = () => (
  <footer>
  © {new Date().getFullYear()}
</footer>
);

export default FooterView;
