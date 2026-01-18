import React from 'react';
import './Button.css';

export const Button = ({ 
  label, 
  variant = 'primary', 
  size = 'medium',
  icon,
  onClick 
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {label}
    </button>
  );
};
