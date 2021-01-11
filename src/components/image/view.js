import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const View = ({ alt, image, placeholderClass }) => {
  return image ? (
    <GatsbyImage
      alt={alt}
      image={getImage(image)}
    />
  ) : (
    <div className={placeholderClass} style={{ backgroundColor: '#101727'}} />
)};
View.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.object,
};
View.defaultProps = {
  image: null,
};

export default View;
