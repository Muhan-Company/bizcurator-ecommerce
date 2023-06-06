import Image from 'next/image';
import { Cart } from '../Icons';
import React, { useState } from 'react';
import AddToCartModal from '../modals/AddToCartModal';
import { createPortal } from 'react-dom';
import { ProductDetail } from '@/pages';
import useAccessTokenCookie from '@/hooks/useAccessTokenCookie';
import { useRouter } from 'next/router';

export default function Product({
  id,
  category_id,
  product_name,
  main_image_url,
  regular_price,
  sale_price,
  min_quantity,
}: ProductDetail) {
  const [showAddToCartModal, setShowAddToCartModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(min_quantity);
  const accessToken = useAccessTokenCookie();
  const { push } = useRouter();

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowAddToCartModal(true);
    document.body.classList.add('modal-open');
  };

  return (
    <div
      onClick={() => push(`/products/${category_id}?itemId=${id}`)}
      className="w-full inline-block space-y-1.5 sm:space-y-3 lg:space-y-4"
    >
      <div className="aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-lg duration-300">
        <Image src={main_image_url} alt="Product" fill sizes="100%" className="object-cover" />
        <button
          onClick={openModal}
          className="w-7 h-7 lg:w-11 lg:h-11 bg-white/50 rounded-full absolute center bottom-[10px] right-[10px] shadow-md hover:shadow-lg duration-300"
        >
          <Cart className="w-4 h-4 lg:w-6 lg:h-6 text-main" />
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="font-medium text-title-xs lg:text-title-md text-main">{product_name}</h3>
        <h3 className="font-noraml text-title-xs lg:text-title-md text-main">
          {accessToken ? sale_price?.toLocaleString('ko-KR') + '원' : '가격 비공개'}
        </h3>
      </div>

      {showAddToCartModal &&
        createPortal(
          <AddToCartModal
            showAddToCartModal={showAddToCartModal}
            setShowAddToCartModal={setShowAddToCartModal}
            quantity={quantity}
            setQuantity={setQuantity}
            product_name={product_name}
            main_image_url={main_image_url}
            sale_price={sale_price}
            regular_price={regular_price}
            min_quantity={min_quantity}
            id={id}
          />,
          document.body,
        )}
    </div>
  );
}
