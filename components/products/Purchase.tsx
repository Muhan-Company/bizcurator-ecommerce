import { useState } from 'react';
import { createPortal } from 'react-dom';
import Counter from '../cart/Counter';
import { ChevronDown } from '../Icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addCompleteModalState, buyCompleteModalState } from '@/atoms/modalAtoms';
import AddCompleteModal from '../modals/AddCompleteModal';
import BuyCompleteModal from '../modals/BuyCompleteModal';
import { Trending } from '@/pages';
import { addToCart } from '@/apis/cartApis';
import { AxiosResponse } from 'axios';
import useInvalidation from '@/hooks/useInvalidation';
import useCustomMutation from '@/hooks/useCustomMutation';
import useToast from '@/hooks/useToast';
import useAddCompleteModal from '@/hooks/useAddCompleteModal';

export interface AddToCartVariables {
  product_id: number;
  quantity: number;
}

export default function Purchase({ product_name, id, min_quantity, regular_price, sale_price }: Trending) {
  const [quantity, setQuantity] = useState<number>(min_quantity);
  const [open, setOpen] = useState<boolean>(false);
  const showAddCompleteModal = useRecoilValue(addCompleteModalState);
  const [showBuyCompleteModal, setShowBuyCompleteModal] = useRecoilState(buyCompleteModalState);

  const closeAccordion = () => {
    setOpen(false);
    setQuantity(min_quantity);
  };

  const invalidateQueries = useInvalidation();
  const showModal = useAddCompleteModal();

  const handleSuccess = () => {
    showModal();
    invalidateQueries(['cart']);
  };

  const handleError = () => {
    showToast('장바구니 담기 실패', true);
  };

  const { mutate, isLoading } = useCustomMutation<AxiosResponse, AddToCartVariables>(
    addToCart,
    handleSuccess,
    handleError,
  );
  const showToast = useToast();

  const handleAddToCart = () => {
    const variables = {
      product_id: id,
      quantity,
    };

    if (open) {
      mutate(variables);
    } else {
      setOpen(true);
    }
  };

  const buyItem = () => {
    if (open) {
      setShowBuyCompleteModal(true);
      document.body.classList.add('modal-open');
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="z-10 fixed bottom-0 bg-white rounded-t-[10px] right-0 left-0 shadow-[0px_-2px_8px_rgba(0,0,0,0.08)]">
      <div className={`${open ? 'max-h-[137px]' : 'max-h-0 overflow-hidden'} transition-all duration-300`}>
        <div className="text-center mb-5">
          <button onClick={closeAccordion}>
            <ChevronDown />
          </button>
        </div>

        <div className="px-3">
          <h3 className="px-[9px] font-normal text-title-xs">{product_name}</h3>

          <div className="px-2 py-[15px] center-between bg-gray_03">
            <Counter min_quantity={min_quantity} quantity={quantity} setQuantity={setQuantity} />
            <h4 className="font-medium text-main text-body-sm">총 금액</h4>
            <div className="flex flex-col text-end">
              <span className="font-bold text-main text-label-md">
                {(sale_price * quantity).toLocaleString('ko-KR')}원
              </span>
              <span className="text-label-sm text-gray_01 line-through">
                {(regular_price * quantity).toLocaleString('ko-KR')}원
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2 space-y-6">
        <div className="center gap-x-2">
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="disabled:opacity-50 disabled:cursor-not-allowed btn-white w-[172px] h-[42px] py-[19px]"
          >
            {isLoading ? '장바구니 담는 중...' : '장바구니'}
          </button>

          <button onClick={buyItem} className="btn-primary w-[172px] h-[42px] py-[19px]">
            구매하기
          </button>
        </div>

        <div className="mx-auto w-[138px] h-[5px] bg-black rounded-[100px]"></div>
      </div>

      {showAddCompleteModal && createPortal(<AddCompleteModal closeAccordion={closeAccordion} />, document.body)}
      {showBuyCompleteModal && createPortal(<BuyCompleteModal closeAccordion={closeAccordion} />, document.body)}
    </div>
  );
}
