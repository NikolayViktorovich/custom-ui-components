import { Checkbox } from './Checkbox';

export default {
  title: 'Компоненты/Чекбокс',
  component: Checkbox,
  tags: ['autodocs'],
};

export const Выключен = {
  args: {
    label: 'Метка',
    checked: false,
  },
};

export const Включен = {
  args: {
    label: 'Метка',
    checked: true,
  },
};

export const Неактивен = {
  args: {
    label: 'Метка',
    checked: false,
    disabled: true,
  },
};
