import React from 'react';
import css from './Modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={onClose}>×</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
