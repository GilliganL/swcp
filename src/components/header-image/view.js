import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from './styles.module.scss';

const View = ({ image, imageBackgroundColor, imageTitle }) => (
  <div className={styles.headerImageWrapper}>
    <Img
      backgroundColor={imageBackgroundColor || true}
      fluid={image}
      title={imageTitle}
      style={{ height: '100%' }}
    />
  </div>
);
View.propTypes = {};
View.defaultProps = {};

export default View;
