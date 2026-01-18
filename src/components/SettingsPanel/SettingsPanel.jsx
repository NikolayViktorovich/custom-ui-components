import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Toggle } from '../Toggle/Toggle';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { Slider } from '../Slider/Slider';
import { Save } from 'lucide-react';
import './SettingsPanel.css';

export const SettingsPanel = ({ onSave }) => {
  const [settings, setSettings] = useState({
    username: 'Николай',
    email: 'n.golubtsov05@bk.ru',
    notifications: true,
    darkMode: true,
    language: null,
    volume: 75,
  });

  const handleSave = () => {
    onSave?.(settings);
  };

  return (
    <div className="settings-panel">
      <div className="settings-panel__header">
        <h2 className="settings-panel__title">Настройки профиля</h2>
        <p className="settings-panel__subtitle">Управление вашим аккаунтом</p>
      </div>

      <div className="settings-panel__section">
        <h3 className="settings-panel__section-title">Основная информация</h3>
        <div className="settings-panel__fields">
          <Input
            label="Имя пользователя"
            value={settings.username}
            onChange={(e) => setSettings({ ...settings, username: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
          />
        </div>
      </div>

      <div className="settings-panel__section">
        <h3 className="settings-panel__section-title">Предпочтения</h3>
        <div className="settings-panel__fields">
          <Dropdown
            label="Язык интерфейса"
            placeholder="Выберите язык"
            options={['Русский', 'English', 'Español', 'Deutsch']}
          />
          
          <div className="settings-panel__field">
            <label className="settings-panel__label">Громкость уведомлений</label>
            <Slider
              min={0}
              max={100}
              defaultValue={settings.volume}
              onChange={(val) => setSettings({ ...settings, volume: val })}
            />
          </div>
        </div>
      </div>

      <div className="settings-panel__section">
        <h3 className="settings-panel__section-title">Дополнительно</h3>
        <div className="settings-panel__toggles">
          <Toggle
            label="Темная тема"
            defaultChecked={settings.darkMode}
            onChange={(val) => setSettings({ ...settings, darkMode: val })}
          />
          <Toggle
            label="Push-уведомления"
            defaultChecked={settings.notifications}
            onChange={(val) => setSettings({ ...settings, notifications: val })}
          />
        </div>
      </div>

      <div className="settings-panel__actions">
        <Button label="Отмена" variant="secondary" />
        <Button 
          label="Сохранить изменения" 
          variant="primary"
          icon={<Save size={18} />}
          onClick={handleSave}
        />
      </div>
    </div>
  );
};
