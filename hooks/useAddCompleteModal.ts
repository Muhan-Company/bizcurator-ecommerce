import { addCompleteModalState } from '@/atoms/modalAtoms';
import { useSetRecoilState } from 'recoil';

const useAddCompleteModal = () => {
  const setShowAddCompleteModal = useSetRecoilState(addCompleteModalState);

  const showModal = () => {
    setShowAddCompleteModal(true);

    document.body.classList.add('modal-open');
  };

  return showModal;
};

export default useAddCompleteModal;
