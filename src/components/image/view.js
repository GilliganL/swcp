import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const View = ({ alt, image }) => (
  <GatsbyImage
    alt={alt}
    image={getImage(image)}
  />
);
View.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default View;
