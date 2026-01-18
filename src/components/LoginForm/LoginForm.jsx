import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { LogIn } from 'lucide-react';
import './LoginForm.css';

export const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ email, password, remember });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__header">
        <h2 className="login-form__title">Вход в систему</h2>
        <p className="login-form__subtitle">Введите свои данные для входа</p>
      </div>

      <div className="login-form__fields">
        <Input
          label="Email"
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Input
          label="Пароль"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-form__options">
          <Checkbox 
            label="Запомнить меня" 
            checked={remember}
            onChange={setRemember}
          />
          <a href="#" className="login-form__link">Забыли пароль?</a>
        </div>
      </div>

      <div className="login-form__actions">
        <Button 
          label="Войти" 
          variant="primary" 
          icon={<LogIn size={18} />}
        />
        <p className="login-form__footer">
          Нет аккаунта? <a href="#" className="login-form__link">Зарегистрироваться</a>
        </p>
      </div>
    </form>
  );
};
