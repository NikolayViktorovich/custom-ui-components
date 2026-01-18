import React from 'react';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { AlertTriangle, Trash2 } from 'lucide-react';
import './ConfirmDialog.css';

export const ConfirmDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  title = 'Подтвердите действие',
  message,
  type = 'warning'
}) => {
  const handleConfirm = () => {
    onConfirm?.();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="small">
      <div className="confirm-dialog">
        <div className={`confirm-dialog__icon confirm-dialog__icon--${type}`}>
          {type === 'warning' && <AlertTriangle size={32} />}
          {type === 'danger' && <Trash2 size={32} />}
        </div>
        
        <p className="confirm-dialog__message">{message}</p>
        
        <div className="confirm-dialog__actions">
          <Button label="Отмена" variant="secondary" onClick={onClose} />
          <Button 
            label={type === 'danger' ? 'Удалить' : 'Подтвердить'} 
            variant={type === 'danger' ? 'danger' : 'primary'}
            onClick={handleConfirm}
          />
        </div>
      </div>
    </Modal>
  );
};
