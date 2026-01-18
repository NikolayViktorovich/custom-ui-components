import { Input } from './Input';

export default {
  title: 'Компоненты/Поле ввода',
  component: Input,
  tags: ['autodocs'],
};

export const Текст = {
  args: {
    label: 'Имя пользователя',
    placeholder: 'Введите имя',
  },
};

export const Пароль = {
  args: {
    label: 'Пароль',
    type: 'password',
    placeholder: '••••••',
  },
};

export const Сайт = {
  args: {
    label: 'Веб-сайт',
    placeholder: 'www.',
  },
};
