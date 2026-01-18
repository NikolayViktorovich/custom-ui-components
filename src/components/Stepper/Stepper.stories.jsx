import { Stepper } from './Stepper';

export default {
  title: 'Компоненты/Счетчик',
  component: Stepper,
  tags: ['autodocs'],
};

export const Пиксели = {
  args: {
    label: 'px',
    defaultValue: 123,
    min: 0,
    max: 999,
  },
};

export const Проценты = {
  args: {
    label: '%',
    defaultValue: 50,
    min: 0,
    max: 100,
  },
};
