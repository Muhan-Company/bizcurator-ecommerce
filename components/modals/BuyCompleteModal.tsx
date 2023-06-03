import { buyCompleteModalState } from '@/atoms/modalAtoms';
import { useSetRecoilState } from 'recoil';

export default function BuyCompleteModal({ closeAccordion }: { closeAccordion?: () => void }) {
  const setShowBuyCompleteModal = useSetRecoilState(buyCompleteModalState);

  const closeModal = () => {
    setShowBuyCompleteModal(false);
    document.body.classList.remove('modal-open');

    closeAccordion && closeAccordion();
  };

  return (
    <>
      <div className="center flex-col gap-y-6 modal-contents w-[351px] h-36 modal-box-shadow">
        <p className="font-normal text-body-md text-main">구매가 완료되었습니다.</p>
        <button
          onClick={closeModal}
          className="w-[156px] h-[42px] text-body-sm font-normal text-main border-[1px] border-[#DDDDDD] rounded-lg"
        >
          닫기
        </button>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
    </>
  );
}
