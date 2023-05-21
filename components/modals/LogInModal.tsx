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
      <div className="modal-contents w-[350px] h-[426px] modal-box-shadow"></div>
      <div onClick={closeModal} className="modal-overlay"></div>
    </div>
  );
}
