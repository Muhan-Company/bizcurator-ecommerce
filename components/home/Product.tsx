import Image from 'next/image';
import { Cart } from '../Icons';
import React, { useState } from 'react';
import AddToCartModal from '../modal/AddToCartModal';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Product() {
  const [showAddToCartModal, setShowAddToCartModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(100);
  const router = useRouter();

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowAddToCartModal(true);
    document.body.classList.add('modal-open');
  };

  let category_id = 1;
  let itme_id = 1234;

  return (
    <div
      onClick={() => router.push(`/products/${category_id}?itemId=${itme_id}`)}
      className="w-full sm:space-y-3 lg:space-y-4"
    >
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

      {showAddToCartModal &&
        createPortal(
          <AddToCartModal
            setShowAddToCartModal={setShowAddToCartModal}
            quantity={quantity}
            setQuantity={setQuantity}
            name={'두루마리 휴지 24롤'}
            src={'/img/tissue.png'}
            price={1000}
            discount={10}
            min={100}
          />,
          document.body,
        )}
    </div>
  );
}
