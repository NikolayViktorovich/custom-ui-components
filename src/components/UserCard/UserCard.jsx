import React, { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { UserPlus, Heart, Settings, Trash2, Mail, Briefcase } from 'lucide-react';
import './UserCard.css';

export const UserCard = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { icon: <UserPlus size={18} />, label: 'Добавить в друзья' },
    { icon: <Heart size={18} />, label: 'Избранное' },
    { icon: <Settings size={18} />, label: 'Настройки' },
    { icon: <Trash2 size={18} />, label: 'Удалить' },
  ];

  return (
    <div className="user-card">
      <div className="user-card__header">
        <div className="user-card__avatar">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <div className="user-card__avatar-placeholder">
              {user.name.charAt(0)}
            </div>
          )}
        </div>
        <button 
          className="user-card__menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          •••
        </button>
      </div>

      <div className="user-card__info">
        <h3 className="user-card__name">{user.name}</h3>
        <div className="user-card__details">
          <div className="user-card__detail">
            <Mail size={14} />
            <span>{user.email}</span>
          </div>
          <div className="user-card__detail">
            <Briefcase size={14} />
            <span>{user.role}</span>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="user-card__menu">
          <Menu items={menuItems} statusLabel="Публичное" statusType="public" />
        </div>
      )}
    </div>
  );
};
