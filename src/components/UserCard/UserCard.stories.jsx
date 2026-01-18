import { UserCard } from './UserCard';

export default {
  title: 'Формы/Карточка пользователя',
  component: UserCard,
};

export const Стандартная = {
  args: {
    user: {
      name: 'Николай Викторович',
      email: 'n.golubtsov05@bk.ru',
      role: 'Разработчик',
      avatar: 'https://i.postimg.cc/KjvcBSz1/photo-2025-06-18-12-28-51.jpg',
    },
  },
};

export const Пустая = {
  args: {
    user: {
      name: 'Николай Викторович',
      email: 'n.golubtsov05@bk.ru',
      role: 'Разработчик',
    },
  },
};
