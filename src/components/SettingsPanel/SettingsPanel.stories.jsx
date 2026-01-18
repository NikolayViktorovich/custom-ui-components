import { SettingsPanel } from './SettingsPanel';

export default {
  title: 'Формы/Панель настроек',
  component: SettingsPanel,
};

export const Стандартная = {
  args: {
    onSave: (data) => console.log('Settings saved:', data),
  },
};
