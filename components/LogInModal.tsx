export default function LogInModal({
  setShowLogInModal,
}: {
  setShowLogInModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg w-[350px] h-[426px] bg-white"></div>
      <div onClick={() => setShowLogInModal(false)} className="fixed inset-0 bg-black/70 z-20"></div>
    </div>
  );
}
