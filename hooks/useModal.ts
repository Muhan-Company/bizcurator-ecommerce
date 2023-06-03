import { Dispatch, SetStateAction } from 'react';
import { SetterOrUpdater } from 'recoil';

const useModal = (setShowModal: Dispatch<SetStateAction<boolean>> | SetterOrUpdater<boolean>) => {
  const showModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-show');
  };

  const hideModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-show');
  };

  return { showModal, hideModal };
};

export default useModal;
