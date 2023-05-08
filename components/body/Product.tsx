import Image from 'next/image';
import { Cart } from '../Icons';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import CartAddModals from '../modal/CartAddModals';

export default function Product() {
  const [showCartItemAddModal, setShowCartItemAddModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(100);

  const openModal = () => {
    setShowCartItemAddModal(true);
    document.body.classList.add('modal-open');
  };

  return (
    <div className="w-full sm:space-y-3 lg:space-y-4">
      <div className="aspect-square relative">
        <Image src={'/img/tissue.png'} alt="Product" fill sizes="100%" className="object-cover" />
        <button
          onClick={openModal}
          className="w-7 h-7 lg:w-11 lg:h-11 bg-white/50 rounded-full absolute center bottom-[10px] right-[10px]"
        >
          <Cart className="w-4 h-4 lg:w-6 lg:h-6 text-main" />
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="font-medium text-title-xs lg:text-title-md text-main">
          두루마리 휴지 <br /> 24롤
        </h3>
        <h3 className="font-noraml text-title-xs lg:text-title-md text-main">가격비공개</h3>
      </div>

      {showCartItemAddModal &&
        createPortal(
          CartAddModals.CartItemAddModal({
            quantity: quantity,
            setQuantity: setQuantity,
            setShowCartItemAddModal: setShowCartItemAddModal,
            src: '/img/tissue.png',
          }),
          document.body,
        )}
    </div>
  );
}
