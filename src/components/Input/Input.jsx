import React from 'react';
import './Input.css';

export const Input = ({ 
  label, 
  type = 'text', 
  placeholder,
  value,
  onChange 
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
