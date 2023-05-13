import { buyCompleteModalState } from '@/atoms/modalAtoms';
import { useSetRecoilState } from 'recoil';

export default function BuyCompleteModal({ closeAccordion }: { closeAccordion: () => void }) {
  const setShowBuyCompleteModal = useSetRecoilState(buyCompleteModalState);

  const closeModal = () => {
    setShowBuyCompleteModal(false);
    document.body.classList.remove('modal-open');

    closeAccordion();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-6 z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[351px] h-36 rounded-lg modal-box-shadow">
        <p className="font-normal text-body-md text-main">구매가 완료되었습니다.</p>
        <button
          onClick={closeModal}
          className="w-[156px] h-[42px] text-body-sm font-normal text-main border-[1px] border-[#DDDDDD] rounded-lg"
        >
          닫기
        </button>
      </div>
      <div className="bg-black/70 fixed inset-0 z-10" onClick={closeModal}></div>
    </>
  );
}
