import { useRecoilState } from 'recoil';
import LoginForm from '../users/LoginForm';
import { logInModalState } from '@/atoms/modalAtoms';
import useModal from '@/hooks/useModal';

export default function LogInModal() {
  const [showLoginModal, setShowLoginModal] = useRecoilState(logInModalState);
  const { closeModal } = useModal(showLoginModal, setShowLoginModal);

  return (
    <div>
      <div className="modal-contents w-[350px] modal-box-shadow">
        <LoginForm />
      </div>
      <div onClick={closeModal} className="modal-overlay"></div>
    </div>
  );
}
