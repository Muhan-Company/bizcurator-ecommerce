import { Dispatch, SetStateAction, useEffect } from 'react';
import { SetterOrUpdater } from 'recoil';

const useModal = (showModal: boolean, setShowModal: Dispatch<SetStateAction<boolean>> | SetterOrUpdater<boolean>) => {
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const disableScroll = () => {
      document.documentElement.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.documentElement.style.overflow = 'auto';
    };

    if (showModal) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [showModal]);

  return { openModal, closeModal };
};

export default useModal;
