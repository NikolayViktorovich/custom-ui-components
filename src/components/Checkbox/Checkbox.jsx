import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Checkbox.css';

export const Checkbox = ({ 
  label, 
  checked = false,
  disabled = false,
  onChange 
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (!disabled) {
      const newValue = !isChecked;
      setIsChecked(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <label className={`checkbox ${disabled ? 'checkbox--disabled' : ''}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={`checkbox__box ${isChecked ? 'checkbox__box--checked' : ''}`}>
        {isChecked && <span className="checkbox__check"><Check size={14} strokeWidth={3} /></span>}
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};
