import { ConfirmDialog } from './ConfirmDialog';
import { Button } from '../Button/Button';
import { useState } from 'react';

export default {
  title: 'Компоненты/Диалог подтверждения',
  component: ConfirmDialog,
};

export const Предупреждение = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button label="Показать предупреждение" onClick={() => setIsOpen(true)} />
      <ConfirmDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => alert('Подтверждено')}
        title="Несохраненные изменения"
        message="У вас есть несохраненные изменения. Вы уверены, что хотите покинуть страницу?"
        type="warning"
      />
    </>
  );
};

export const Удаление = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button label="Удалить элемент" variant="danger" onClick={() => setIsOpen(true)} />
      <ConfirmDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => alert('Удалено')}
        title="Удалить элемент?"
        message="Это действие нельзя отменить. Элемент будет удален навсегда."
        type="danger"
      />
    </>
  );
};
