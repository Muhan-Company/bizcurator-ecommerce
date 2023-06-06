import { addCompleteModalState } from '@/atoms/modalAtoms';
import useModal from '@/hooks/useModal';
import Link from 'next/link';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';

interface AddCompleteModalPropsType {
  setShowAddToCartModal?: Dispatch<SetStateAction<boolean>>;
  closeAccordion?: () => void;
}

export default function AddCompleteModal({ setShowAddToCartModal, closeAccordion }: AddCompleteModalPropsType) {
  const [showAddCompleteModal, setShowAddCompleteModal] = useRecoilState(addCompleteModalState);

  const { closeModal } = useModal(showAddCompleteModal, setShowAddCompleteModal);

  const handleCloseModal = (e: MouseEvent) => {
    e.stopPropagation();
    closeModal();

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
        onClick={(e) => e.stopPropagation()}
        className="w-[351px] h-auto pt-[30px] px-3 center modal-box-shadow modal-contents flex-col gap-0.5"
      >
        장바구니에 담았습니다.
        <div className="center gap-2 py-6">
          {/* todo: 모달 닫기 기능 연결 */}
          <button className="btn-white w-[156px] h-[42px] py-[16px]" onClick={handleCloseModal}>
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
      <div className="modal-overlay" onClick={handleCloseModal}></div>
    </>
  );
}
