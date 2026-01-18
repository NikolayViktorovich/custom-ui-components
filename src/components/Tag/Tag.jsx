import React from 'react';
import { X } from 'lucide-react';
import './Tag.css';

export const Tag = ({ 
  label, 
  variant = 'green',
  onRemove 
}) => {
  return (
    <div className={`tag tag--${variant}`}>
      <span className="tag__label">{label}</span>
      {onRemove && (
        <button className="tag__remove" onClick={onRemove}>
          <X size={14} />
        </button>
      )}
    </div>
  );
};
