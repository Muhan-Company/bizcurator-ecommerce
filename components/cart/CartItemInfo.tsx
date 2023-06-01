import React, { useState } from 'react';
import Counter from './Counter';
import { CartItemType } from './CartItem';

type CartItemInfoPropsType = {
  cartItem: CartItemType;
};

export default function CartItemInfo({ cartItem }: CartItemInfoPropsType) {
  const { quantity, regular_price, discount_price, name, minimum_quantity } = cartItem;
  const [qty, setQty] = useState(quantity);

  const originalPrice = (regular_price * qty).toLocaleString('ko-KR');
  const discountedPrice = (discount_price * qty).toLocaleString('ko-KR');

  return (
    <div className="pl-3 flex flex-col md:grow md:flex-row md:items-center justify-between md:justify-around">
      <div className="flex flex-col md:grow md:flex-row md:items-center md:justify-between">
        {/* 상품명 */}
        <h3 className="text-label-sm md:text-[20px] font-medium">{name}</h3>
        <div className="flex flex-col md:text-end">
          {/* 할인적용 가격 */}
          <span className="text-label-sm md:text-title-lg font-bold">{discountedPrice}원</span>
          {/* 정가 */}
          <span className="text-label-xs md:text-body-sm text-gray_01 line-through">{originalPrice}원</span>
        </div>
      </div>
      {/* 최소수량 입력받기 */}
      <div className="md:absolute">
        <Counter minimum_quantity={minimum_quantity} qty={qty} setQty={setQty} />
      </div>
    </div>
  );
}
