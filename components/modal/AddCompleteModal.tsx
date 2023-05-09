import Link from 'next/link';

interface AddCompleteModalPropsType {
  setShowAddToCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddCompleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddCompleteModal({
  setShowAddCompleteModal,
  setShowAddToCartModal,
}: AddCompleteModalPropsType) {
  const closeModal = () => {
    setShowAddCompleteModal(false);
    setShowAddToCartModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <div className="w-[351px] h-auto pt-[30px] px-3 modal-shape z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-0.5">
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
      <div className="modal-box-shadow fixed inset-0 modal bg-black/70 z-10" onClick={closeModal}></div>
    </>
  );
}
