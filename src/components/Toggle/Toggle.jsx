import React, { useState } from 'react';
import './Toggle.css';

export const Toggle = ({ label, defaultChecked = false, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="toggle-wrapper">
      <button
        className={`toggle ${checked ? 'toggle--checked' : ''}`}
        onClick={handleToggle}
        role="switch"
        aria-checked={checked}
      >
        <span className="toggle__slider" />
      </button>
      {label && <span className="toggle-label">{label}</span>}
    </div>
  );
};
