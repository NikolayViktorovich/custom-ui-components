import { Tag } from './Tag';

export default {
  title: 'Компоненты/Тег',
  component: Tag,
  tags: ['autodocs'],
};

export const Зеленый = {
  args: {
    label: 'Ключевое слово',
    variant: 'green',
    onRemove: () => alert('Удалено'),
  },
};

export const Оранжевый = {
  args: {
    label: 'Ключевое слово',
    variant: 'orange',
    onRemove: () => alert('Удалено'),
  },
};
