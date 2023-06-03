import { logInModalState } from '@/atoms/modalAtoms';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

const useRequireAuth = () => {
  const setShowLogInModal = useSetRecoilState(logInModalState);
  const { push } = useRouter();

  const requireAuth = () => {
    push('/');

    setShowLogInModal(true);
    document.body.classList.add('modal-open');
  };

  return requireAuth;
};

export default useRequireAuth;
