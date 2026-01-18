import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

export const ThemeToggle = ({ defaultTheme = 'dark' }) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <div className="theme-toggle">
      <button
        className={`theme-toggle__btn ${theme === 'dark' ? 'theme-toggle__btn--active' : ''}`}
        onClick={() => setTheme('dark')}
        aria-label="Темная тема"
      >
        <Moon size={20} />
      </button>
      <button
        className={`theme-toggle__btn ${theme === 'light' ? 'theme-toggle__btn--active' : ''}`}
        onClick={() => setTheme('light')}
        aria-label="Светлая тема"
      >
        <Sun size={20} />
      </button>
    </div>
  );
};
