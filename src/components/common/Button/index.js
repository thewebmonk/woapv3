import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, onClick, className = '', ...rest }) => {
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
