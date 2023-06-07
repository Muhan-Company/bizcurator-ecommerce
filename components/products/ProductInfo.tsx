import useAddToCart from '@/hooks/useAddToCart';
import { ProductDetail } from '@/pages';
import { useState } from 'react';
import Counter from '../cart/Counter';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addCompleteModalState, buyCompleteModalState } from '@/atoms/modalAtoms';
import useModal from '@/hooks/useModal';
import AddCompleteModal from '../modals/AddCompleteModal';
import BuyCompleteModal from '../modals/BuyCompleteModal';
import { createPortal } from 'react-dom';

export default function ProductInfo({ product_name, id, regular_price, sale_price, min_quantity }: ProductDetail) {
  const [quantity, setQuantity] = useState<number>(min_quantity);
  const showAddCompleteModal = useRecoilValue(addCompleteModalState);
  const [showBuyCompleteModal, setShowBuyCompleteModal] = useRecoilState(buyCompleteModalState);
  const { openModal } = useModal(showBuyCompleteModal, setShowBuyCompleteModal);
  const addToCartMutation = useAddToCart();

  const { mutate, isLoading } = addToCartMutation;

  return (
    <div className="px-3 space-y-4 w-1/2 aspect-square md:flex md:flex-col justify-between">
      <section>
        <h1 className="font-bold text-title-md">{product_name}</h1>
        <h1 className="font-bold text-title-md text-main">{sale_price.toLocaleString('ko-KR')}원</h1>
        <h3 className="font-normal text-gray_01 text-body-xs line-through">
          정가 {regular_price.toLocaleString('ko-KR')}원
        </h3>

        <p className="space-x-7 break-keep mt-2">
          <span className="font-normal text-body-xs text-main">구매수량</span>
          <span className="font-medium text-body-xs text-main">최소구매수량 {min_quantity}개</span>
        </p>
        <p className="space-x-7 break-keep">
          <span className="font-normal text-body-xs text-main">배송정보</span>
          <span className="font-medium text-body-xs text-main">최소구매수량 이상 구매시 배송비 무료</span>
        </p>
      </section>

      <section className="hidden md:block">
        <div className="py-[15px] center-between bg-gray_03">
          <Counter minimum_quantity={min_quantity} qty={quantity} setQty={setQuantity} />
          <h4 className="font-medium text-main text-body-sm">총 금액</h4>
          <div className="flex flex-col text-end">
            <span className="font-bold text-main text-label-md truncate">
              {(sale_price * quantity).toLocaleString('ko-KR')}원
            </span>
            <span className="text-label-sm text-gray_01 line-through truncate">
              {(regular_price * quantity).toLocaleString('ko-KR')}원
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => mutate({ product_id: id, quantity })}
            disabled={isLoading}
            className="disabled:opacity-50 disabled:cursor-not-allowed btn-white w-[172px] md:w-full h-[42px] py-[19px]"
          >
            {isLoading ? '장바구니 담는 중...' : '장바구니'}
          </button>

          <button onClick={openModal} className="btn-primary w-[172px] md:w-full h-[42px] py-[19px]">
            구매하기
          </button>
        </div>
      </section>
      {showAddCompleteModal && createPortal(<AddCompleteModal />, document.body)}
      {showBuyCompleteModal && createPortal(<BuyCompleteModal />, document.body)}
    </div>
  );
}
