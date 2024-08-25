import React from 'react';
import PropTypes from 'prop-types';

const AnimatedSVG = ({ src, className, alt }) => {
  return (
    <img src={src} alt={alt || "Animated SVG"} className={className} />
  );
};

AnimatedSVG.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default AnimatedSVG;