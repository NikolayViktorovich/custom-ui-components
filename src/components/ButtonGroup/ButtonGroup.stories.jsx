import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Компоненты/Группа кнопок',
  component: ButtonGroup,
  tags: ['autodocs'],
};

export const Стандартная = {
  args: {
    options: ['Метка', 'Метка', 'Метка'],
    defaultSelected: 0,
  },
};

export const Режимы = {
  args: {
    options: ['Просмотр', 'Редактирование', 'Настройки'],
    defaultSelected: 1,
  },
};
