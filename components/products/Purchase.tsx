import { useState } from 'react';
import Counter from '../cart/Counter';
import { ChevronDown } from '../Icons';
import { useRecoilState } from 'recoil';
import { addCompleteModalState, buyCompleteModalState } from '@/atoms/modalAtoms';
import { createPortal } from 'react-dom';
import AddCompleteModal from '../modals/AddCompleteModal';
import BuyCompleteModal from '../modals/BuyCompleteModal';

interface PurchaseProps {
  name: string;
  min_quantity: number;
  regular_price: number;
  sale_price: number;
}

export default function Purchase({ name, min_quantity, regular_price, sale_price }: PurchaseProps) {
  const [quantity, setQuantity] = useState<number>(20);
  const [open, setOpen] = useState<boolean>(false);
  const [showAddCompleteModal, setShowAddCompleteModal] = useRecoilState(addCompleteModalState);
  const [showBuyCompleteModal, setShowBuyCompleteModal] = useRecoilState(buyCompleteModalState);

  const closeAccordion = () => {
    setOpen(false);
    setQuantity(min_quantity);
  };

  const addToCart = () => {
    setShowAddCompleteModal(true);
    document.body.classList.add('modal-open');
  };

  const handleClick = () => {
    if (open) {
      addToCart();
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
      <div className={`${!open ? 'hidden' : 'block'}`}>
        <div className="text-center mb-5">
          <button onClick={closeAccordion}>
            <ChevronDown />
          </button>
        </div>

        <div className="px-3">
          <h3 className="px-[9px] font-normal text-title-xs">{name}</h3>

          <div className="px-2 py-[15px] center-between bg-gray_03">
            <Counter min={min_quantity} quantity={quantity} setQuantity={setQuantity} />
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
          <button onClick={handleClick} className="btn-white w-[172px] h-[42px] py-[19px]">
            장바구니
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
