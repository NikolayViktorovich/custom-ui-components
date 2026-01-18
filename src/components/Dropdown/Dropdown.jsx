import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './Dropdown.css';

export const Dropdown = ({ label, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-wrapper">
      {label && <label className="dropdown-label">{label}</label>}
      <div className="dropdown">
        <button
          className="dropdown__trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selected || placeholder}</span>
          <span className="dropdown__arrow">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>
        
        {isOpen && (
          <div className="dropdown__menu">
            {options.map((option, index) => (
              <button
                key={index}
                className={`dropdown__item ${selected === option ? 'dropdown__item--selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
