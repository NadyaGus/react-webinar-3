import React from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function ModalLayout({ children, isOpen, title, toggleModal }) {
  const cn = bem('ModalLayout');

  if (!isOpen) {
    return null;
  }

  return (
    <div className={cn()}>
      <div className={cn('center')}>
        <div className="Modal-header">
          <h2 className="Modal-title">{title}</h2>
          <button onClick={toggleModal}>Закрыть</button>
        </div>
        {children}
      </div>
    </div>
  );
}

ModalLayout.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default React.memo(ModalLayout);
