import React, { useState } from 'react';
import { CreditCard, Gem, Crown } from 'lucide-react';
import './Card.css';

export const Card = ({ 
  title, 
  type = 'standard',
  icon,
  selected = false 
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  const getCardIcon = () => {
    if (type === 'standard') return <CreditCard size={48} strokeWidth={1.5} />;
    if (type === 'premium') return <Gem size={48} strokeWidth={1.5} />;
    if (type === 'royale') return <Crown size={48} strokeWidth={1.5} />;
    return icon;
  };

  return (
    <button
      className={`card card--${type} ${isSelected ? 'card--selected' : ''}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      <div className="card__content">
        <div className="card__radio">
          <span className="card__radio-dot" />
        </div>
        <span className="card__title">{title}</span>
      </div>
      <div className="card__icon">{getCardIcon()}</div>
    </button>
  );
};
