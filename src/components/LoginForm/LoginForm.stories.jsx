import { LoginForm } from './LoginForm';

export default {
  title: 'Формы/Форма входа',
  component: LoginForm,
};

export const Стандартная = {
  args: {
    onSubmit: (data) => console.log('Login:', data),
  },
};
