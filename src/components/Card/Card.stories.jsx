import { Card } from './Card';

export default {
  title: 'Компоненты/Карточка',
  component: Card,
  tags: ['autodocs'],
};

export const СтандартнаяКарта = {
  args: {
    title: 'Стандартная карта',
    type: 'standard',
  },
};

export const ПремиумКарта = {
  args: {
    title: 'Премиум карта',
    type: 'premium',
    selected: true,
  },
};

export const РояльКарта = {
  args: {
    title: 'Королевская карта',
    type: 'royale',
  },
};
