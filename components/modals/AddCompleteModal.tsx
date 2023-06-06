import { addCompleteModalState } from '@/atoms/modalAtoms';
import useModal from '@/hooks/useModal';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { useSetRecoilState } from 'recoil';

interface AddCompleteModalPropsType {
  setShowAddToCartModal?: React.Dispatch<React.SetStateAction<boolean>>;
  closeAccordion?: () => void;
}

export default function AddCompleteModal({ setShowAddToCartModal, closeAccordion }: AddCompleteModalPropsType) {
  const setShowAddCompleteModal = useSetRecoilState(addCompleteModalState);

  const { hideModal } = useModal(setShowAddCompleteModal);

  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    hideModal();

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
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
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
