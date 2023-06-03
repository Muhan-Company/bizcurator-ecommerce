import { useSetRecoilState } from 'recoil';
import LoginForm from '../users/LoginForm';
import { logInModalState } from '@/atoms/modalAtoms';

export default function LogInModal() {
  const setShowLogInModal = useSetRecoilState(logInModalState);

  const closeModal = () => {
    setShowLogInModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div>
      <div className="modal-contents w-[350px] modal-box-shadow">
        <LoginForm closeModal={closeModal} />
      </div>
      <div onClick={closeModal} className="modal-overlay"></div>
    </div>
  );
}
