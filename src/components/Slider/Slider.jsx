import React, { useState, useRef } from 'react';
import './Slider.css';

export const Slider = ({ 
  min = 0,
  max = 100,
  defaultValue = 50,
  onChange 
}) => {
  const [value, setValue] = useState(defaultValue);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    const updateValue = (clientX) => {
      if (!sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const newValue = Math.round(min + percent * (max - min));
      
      setValue(newValue);
      onChange?.(newValue);
    };

    const handleMouseMove = (e) => updateValue(e.clientX);
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    updateValue(e.clientX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="slider-wrapper">
      <div 
        ref={sliderRef}
        className="slider" 
        onMouseDown={handleMouseDown}
      >
        <div className="slider__track" style={{ width: `${percent}%` }} />
        <div 
          className="slider__thumb" 
          style={{ left: `${percent}%` }}
        />
      </div>
      <div className="slider__value">{value}</div>
    </div>
  );
};
