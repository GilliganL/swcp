import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import _ from 'lodash';
import styles from './styles.module.scss';

// themes: Blue

const PanelView = ({
  breakpoint, children, image,
}) => (
  <section className={styles.panelImageWrapper}>
    <div className={styles.panelImage}>
      <Img
        backgroundColor
        fluid={image}
        style={{
          height: breakpoint === 'mobile' ? '200px' : '400px',
          width: breakpoint === 'mobile' ? '100%' : '50%',
        }}
      />
      <div className={styles.panelImage__contentWrapper}>
        {children}
      </div>
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
