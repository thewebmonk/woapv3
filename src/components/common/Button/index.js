import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Button = ({
  text,
  type,
  onClick,
  className = '',
  link = '',
  ...rest
}) => {
  // const Button  = ()
  if (link) {
    return (
      <Link
        to={link}
        {...rest}
        onClick={onClick}
        className={`button ${type} ${className}`}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`button ${type} ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Button;
