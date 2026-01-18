import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { useState } from 'react';

export default {
  title: 'Компоненты/Модальное окно',
  component: Modal,
};

const ModalWrapper = ({ size, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button label="Открыть модалку" onClick={() => setIsOpen(true)} />
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Заголовок модального окна"
        size={size}
      >
        {children}
      </Modal>
    </>
  );
};

export const Маленькая = () => (
  <ModalWrapper size="small">
    <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
      Это небольшое модальное окно для простых уведомлений или подтверждений.
    </p>
  </ModalWrapper>
);

export const Средняя = () => (
  <ModalWrapper size="medium">
    <p style={{ color: '#9ca3af', lineHeight: 1.6, marginBottom: '20px' }}>
      Стандартное модальное окно среднего размера. Подходит для форм и детальной информации.
    </p>
    <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
      Можно добавить любой контент внутрь.
    </p>
  </ModalWrapper>
);

export const Большая = () => (
  <ModalWrapper size="large">
    <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
      Большое модальное окно для сложных форм или таблиц с большим количеством данных.
    </p>
  </ModalWrapper>
);
