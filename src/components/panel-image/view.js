import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import _ from 'lodash';
import styles from './styles.module.scss';

// themes: Blue

const PanelView = ({
  breakpoint, children, image,
}) => (
  <section className={styles.panelImage}>
    {breakpoint === 'mobile' && (
      <Img
        backgroundColor
        fluid={image}
        style={{
          height: '200px',
          width: '100%',
        }}
      />
    )}
    <div className={styles.panelImage__contentWrapper}>
      {children}
      {breakpoint !== 'mobile' && (
        <Img
          backgroundColor
          fluid={image}
          style={{
            height: '200px',
            width: '100%',
          }}
        />
      )}
    </div>
  </section>
);
PanelView.propTypes = {
  content: PropTypes.string,
  image: PropTypes.object,
  list: PropTypes.array,
  theme: PropTypes.string,
  title: PropTypes.string.isRequired,
};
PanelView.defaultProps = {
  content: null,
  image: null,
  list: null,
  theme: null,
};

export default PanelView;
