import React, { useState } from 'react';
import { Check, Lock, Users } from 'lucide-react';
import './Menu.css';

export const Menu = ({ items, statusLabel, statusType = 'public' }) => {
  const [activeItem, setActiveItem] = useState(null);

  const getStatusIcon = () => {
    if (statusType === 'public') return <Check size={16} />;
    if (statusType === 'confidential') return <Lock size={16} />;
    if (statusType === 'team') return <Users size={16} />;
    return null;
  };

  return (
    <div className="menu">
      {items.map((item, index) => (
        <button
          key={index}
          className={`menu__item ${activeItem === index ? 'menu__item--active' : ''}`}
          onClick={() => setActiveItem(index)}
        >
          <span className="menu__icon">{item.icon}</span>
          <span className="menu__label">{item.label}</span>
        </button>
      ))}
      
      {statusLabel && (
        <div className={`menu__status menu__status--${statusType}`}>
          <span className="menu__status-icon">
            {getStatusIcon()}
          </span>
          <span className="menu__status-label">{statusLabel}</span>
        </div>
      )}
    </div>
  );
};
