import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '../assets/images';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
  const [_fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(fallback);
  };

  const baseClassName = 'overflow-hidden ' + className;
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img className={baseClassName} ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
