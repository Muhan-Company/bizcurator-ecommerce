import { addCompleteModalState } from '@/atoms/modalAtoms';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';

interface AddCompleteModalPropsType {
  setShowAddToCartModal?: React.Dispatch<React.SetStateAction<boolean>>;
  closeAccordion?: () => void;
}

export default function AddCompleteModal({ setShowAddToCartModal, closeAccordion }: AddCompleteModalPropsType) {
  const setShowAddCompleteModal = useSetRecoilState(addCompleteModalState);

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAddCompleteModal(false);
    document.body.classList.remove('modal-open');

    if (closeAccordion) {
      closeAccordion();
    }

    if (setShowAddToCartModal) {
      setShowAddToCartModal(false);
    }
  };

  return (
    <>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className="w-[351px] h-auto pt-[30px] px-3 center modal-box-shadow modal-contents flex-col gap-0.5"
      >
        장바구니에 담았습니다.
        <div className="center gap-2 py-6">
          {/* todo: 모달 닫기 기능 연결 */}
          <button className="btn-white w-[156px] h-[42px] py-[16px]" onClick={closeModal}>
            닫기
          </button>
          {/* todo: 장바구니 페이지 연결 & 모달 닫기 */}
          <Link
            href="/cart"
            className="btn-primary w-[156px] h-[42px] py-[16px]"
            onClick={() => document.body.classList.remove('modal-open')}
          >
            장바구니 확인
          </Link>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
    </>
  );
}
