import LoginForm from '../users/LoginForm';

export default function LogInModal({
  setShowLogInModal,
}: {
  setShowLogInModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
