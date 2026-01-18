import { Button } from './Button';
import { UserPlus } from 'lucide-react';

export default {
  title: 'Компоненты/Кнопка',
  component: Button,
  tags: ['autodocs'],
};

export const Основная = {
  args: {
    label: 'Отправить',
    variant: 'primary',
  },
};

export const Вторичная = {
  args: {
    label: 'Отмена',
    variant: 'secondary',
  },
};

export const Удалить = {
  args: {
    label: 'Удалить',
    variant: 'danger',
  },
};

export const СИконкой = {
  args: {
    label: 'Добавить участника',
    variant: 'primary',
    icon: <UserPlus size={18} />,
  },
};
