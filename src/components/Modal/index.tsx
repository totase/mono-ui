import { HTMLAttributes, useEffect, useRef } from 'react';
import cx from 'clsx';

import { ModalContext } from './context';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';

import './styles.css';

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose?: () => void;
  ignoreEsc?: boolean;
  ignoreClickOutside?: boolean;
}

const Modal = ({ isOpen, className, children, onClose, ignoreEsc, ignoreClickOutside }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    function closeModalOnClick(e: MouseEvent) {
      if (!modalElement || ignoreClickOutside) return;
      const dialogDimensions = modalElement.getBoundingClientRect();

      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        close();
      }
    }

    function closeModal(e: KeyboardEvent) {
      if (e.key !== 'Escape') return;

      if (ignoreEsc) e.preventDefault();
      else close();
    }

    if (modalElement) {
      modalElement.addEventListener('keydown', closeModal);
      modalElement.addEventListener('click', closeModalOnClick);
    }

    return () => {
      document.body.classList.remove('disable-scroll');

      modalElement?.removeEventListener('keydown', closeModal);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalRef.current]);

  useEffect(() => {
    if (modalRef.current) {
      if (isOpen && !modalRef.current.open) {
        document.body.classList.add('disable-scroll');
        modalRef.current.showModal();
      } else if (!isOpen && modalRef.current.open) {
        close();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const close = () => {
    if (modalRef.current) {
      modalRef.current.close();
      document.body.classList.remove('disable-scroll');

      if (onClose) onClose();
    }
  };

  const classNames = cx('mono-ui-modal', className);

  return (
    <dialog className={classNames} ref={modalRef}>
      <ModalContext.Provider value={{ close }}>{children}</ModalContext.Provider>
    </dialog>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
