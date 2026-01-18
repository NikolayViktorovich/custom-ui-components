import { Slider } from './Slider';

export default {
  title: 'Компоненты/Ползунок',
  component: Slider,
  tags: ['autodocs'],
};

export const Стандартный = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
  },
};

export const Громкость = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 75,
  },
};
