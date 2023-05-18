import Image from 'next/image';
import { Cart } from '../Icons';
import React, { useState } from 'react';
import AddToCartModal from '../modals/AddToCartModal';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import { Trending } from '@/pages';

export default function Product({ id, category_id, name, main_image_url, regular_price, sale_price }: Trending) {
  const [showAddToCartModal, setShowAddToCartModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(100);
  const router = useRouter();

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowAddToCartModal(true);
    document.body.classList.add('modal-open');
  };
  console.log(main_image_url);
  return (
    <div
      onClick={() => router.push(`/products/${category_id}?itemId=${id}`)}
      className="w-full sm:space-y-3 lg:space-y-4"
    >
      <div className="aspect-square relative rounded-lg overflow-hidden">
        <Image src={main_image_url} alt="Product" fill sizes="100%" className="object-cover" />
        <button
          onClick={openModal}
          className="w-7 h-7 lg:w-11 lg:h-11 bg-white/50 rounded-full absolute center bottom-[10px] right-[10px]"
        >
          <Cart className="w-4 h-4 lg:w-6 lg:h-6 text-main" />
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="font-medium text-title-xs lg:text-title-md text-main">{name}</h3>
        <h3 className="font-noraml text-title-xs lg:text-title-md text-main">
          {sale_price?.toLocaleString('ko-KR')}원
        </h3>
      </div>

      {showAddToCartModal &&
        createPortal(
          <AddToCartModal
            setShowAddToCartModal={setShowAddToCartModal}
            quantity={quantity}
            setQuantity={setQuantity}
            name={name}
            main_image_url={main_image_url}
            sale_price={sale_price}
            regular_price={regular_price}
            min={100}
          />,
          document.body,
        )}
    </div>
  );
}
