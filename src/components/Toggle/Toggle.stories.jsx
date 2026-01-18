import { Toggle } from './Toggle';

export default {
  title: 'Компоненты/Переключатель',
  component: Toggle,
  tags: ['autodocs'],
};

export const Выключен = {
  args: {
    label: 'Темная тема',
    defaultChecked: false,
  },
};

export const Включен = {
  args: {
    label: 'Светлая тема',
    defaultChecked: true,
  },
};
