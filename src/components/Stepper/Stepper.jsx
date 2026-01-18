import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './Stepper.css';

export const Stepper = ({ 
  label = 'px',
  min = 0,
  max = 999,
  defaultValue = 123 
}) => {
  const [value, setValue] = useState(defaultValue);

  const increment = () => {
    if (value < max) setValue(value + 1);
  };

  const decrement = () => {
    if (value > min) setValue(value - 1);
  };

  return (
    <div className="stepper">
      <div className="stepper__controls">
        <button className="stepper__btn" onClick={increment}>
          <ChevronUp size={14} />
        </button>
        <button className="stepper__btn" onClick={decrement}>
          <ChevronDown size={14} />
        </button>
      </div>
      <div className="stepper__value">
        {value} <span className="stepper__label">{label}</span>
      </div>
    </div>
  );
};
