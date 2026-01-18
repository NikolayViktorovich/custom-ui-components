import React, { useState } from 'react';
import './ButtonGroup.css';

export const ButtonGroup = ({ options, defaultSelected = 0 }) => {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <div className="button-group">
      {options.map((option, index) => (
        <button
          key={index}
          className={`button-group__item ${selected === index ? 'button-group__item--active' : ''}`}
          onClick={() => setSelected(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
