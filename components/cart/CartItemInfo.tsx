import React from 'react';
import Counter from './Counter';

type CartItemInfoPropsType = {
  name?: string;
  price?: number;
  discount?: number;
};

export default function CartItemInfo({ name = '상품이름', price = 5000, discount = 500 }: CartItemInfoPropsType) {
  const originalPrice = price.toLocaleString('ko-KR');
  const discountedPrice = (price - discount).toLocaleString('ko-KR');

  return (
    <div className="pl-3 flex flex-col md:grow md:flex-row md:items-center justify-between md:justify-around">
      <div className="flex flex-col md:grow md:flex-row md:items-center md:justify-between">
        {/* 상품명 */}
        <h3 className="text-label-sm md:text-[20px]">{name}</h3>
        <div className="flex flex-col md:text-end">
          {/* 할인적용 가격 */}
          <span className="text-label-sm md:text-title-lg font-bold">{discountedPrice}원</span>
          {/* 정가 */}
          <span className="text-label-xs md:text-body-sm text-gray_01 line-through">{originalPrice}원</span>
        </div>
      </div>
      {/* 최소수량 입력받기 */}
      <div className="md:absolute">
        <Counter min={10} />
      </div>
    </div>
  );
}
