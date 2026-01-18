import { Menu } from './Menu';
import { UserPlus, Heart, Settings, Trash2 } from 'lucide-react';

export default {
  title: 'Компоненты/Меню',
  component: Menu,
  tags: ['autodocs'],
};

const menuItems = [
  { icon: <UserPlus size={18} />, label: 'Добавить участника' },
  { icon: <Heart size={18} />, label: 'Избранное' },
  { icon: <Settings size={18} />, label: 'Настройки' },
  { icon: <Trash2 size={18} />, label: 'Удалить' },
];

export const Публичное = {
  args: {
    items: menuItems,
    statusLabel: 'Публичное',
    statusType: 'public',
  },
};

export const Конфиденциальное = {
  args: {
    items: menuItems,
    statusLabel: 'Конфиденциальное',
    statusType: 'confidential',
  },
};

export const КомандныйДоступ = {
  args: {
    items: menuItems,
    statusLabel: 'Командный доступ',
    statusType: 'team',
  },
};
