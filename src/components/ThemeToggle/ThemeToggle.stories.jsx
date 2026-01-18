import { ThemeToggle } from './ThemeToggle';

export default {
  title: 'Компоненты/Переключатель темы',
  component: ThemeToggle,
  tags: ['autodocs'],
};

export const Темная = {
  args: {
    defaultTheme: 'dark',
  },
};

export const Светлая = {
  args: {
    defaultTheme: 'light',
  },
};
