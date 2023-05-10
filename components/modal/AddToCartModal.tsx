import Image from 'next/image';
import Counter from '../cart/Counter';
import AddCompleteModal from './AddCompleteModal';
import { useState } from 'react';

type AddToCartPropsType = {
  name: string;
  src: string;
  price: number;
  discount: number;
  min: number;
  setShowAddToCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

// todo: 클릭한 상품 data 가져와서 적용하기
export default function AddToCartModal({
  name,
  src,
  price,
  discount,
  min,
  setShowAddToCartModal,
  quantity,
  setQuantity,
}: AddToCartPropsType) {
  const originalPrice = (price * quantity).toLocaleString('ko-KR');
  const discountedPrice = ((price - discount) * quantity).toLocaleString('ko-KR');
  const [showAddCompleteModal, setShowAddCompleteModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowAddToCartModal(false);
    document.body.classList.remove('modal-open');
    setQuantity(min);
  };

  const addToCart = () => {
    setShowAddCompleteModal(true);
  };

  return (
    <>
      {showAddCompleteModal ? (
        <AddCompleteModal
          setShowAddCompleteModal={setShowAddCompleteModal}
          setShowAddToCartModal={setShowAddToCartModal}
        />
      ) : (
        <>
          <div className="w-[351px] z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto pt-[30px] px-3 modal-shape flex-col">
            <div className="flex w-full space-x-[22px] py-[18px]">
              {/* 상품 썸네일 */}
              <Image src={src} alt="Thumbnail" width={86} height={86} className="object-cover rounded-[10px]" />
              {/* 상품 정보 */}
              <div>
                <h3 className="font-normal">{name}</h3>
                <span className="font-bold">{price - discount} 원</span>
              </div>
            </div>
            {/* 수량 계산 */}
            <div className="w-full mb-10 px-2 py-[15px] flex items-center justify-between bg-gray_03">
              <Counter min={min} quantity={quantity} setQuantity={setQuantity} />
              <h4 className="font-medium text-main text-body-sm">총 금액</h4>
              <div className="flex flex-col text-end">
                {/* 할인적용 가격 */}
                <span className="font-bold">{discountedPrice}원</span>
                {/* 정가 */}
                <span className="text-label-sm text-gray_01 line-through">{originalPrice}원</span>
              </div>
            </div>

            <div className="center gap-2 py-6">
              {/* todo: 모달 닫기 기능 연결 */}
              <button className="btn-white w-[156px] h-[42px] py-[19px]" onClick={closeModal}>
                취소
              </button>
              {/* todo: 장바구니 담기 API 연결 및 장바구니 담기 성공 모달 연결 */}
              <button className="btn-primary w-[156px] h-[42px] py-[19px]" onClick={addToCart}>
                장바구니 담기
              </button>
            </div>
          </div>
          <div className="modal-box-shadow fixed inset-0 modal bg-black/70 z-10" onClick={closeModal}></div>
        </>
      )}
    </>
  );
}