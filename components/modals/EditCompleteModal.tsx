import { editCompleteModalState } from '@/atoms/modalAtoms';
import useModal from '@/hooks/useModal';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function EditCompleteModal() {
  const [showEditCompleteModal, setShowEditCompleteModal] = useRecoilState(editCompleteModalState);

  const { closeModal } = useModal(showEditCompleteModal, setShowEditCompleteModal);
  const { push } = useRouter();

  const handleHideModal = () => {
    closeModal();
    push('/my-requests?filterMonth=30');
  };

  setTimeout(() => {
    handleHideModal();
  }, 3000);

  return (
    <>
      <div className="modal-contents w-[351px] h-[156px] center bg-white rounded-lg modal-box-shadow flex-col space-y-[26px]">
        <p className="text-main font-medium">수정이 완료되었습니다.</p>
        <button onClick={handleHideModal} className="w-[156px] h-[50px] border border-[#DDDDDD] rounded-lg">
          닫기
        </button>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
    </>
  );
}
