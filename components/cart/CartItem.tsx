import Image from 'next/image';
import React, { useState } from 'react';
import { CloseIcon, DisabledMinusIcon, MinusIcon, PlusIcon, SmallCheckBoxIcon, SmallCheckedBoxIcon } from '../Icons';

type CartItemPropsType = {
  isSelected?: boolean;
};
export default function CartItem({ isSelected = true }: CartItemPropsType) {
  return (
    <div className="flex py-[22px] border-b-[1px] border-b-gray_02">
      {/* todo: 부모 컴포넌트에서 체크박스 선택값 연결 */}
      <div className="pr-3">{isSelected ? <SmallCheckedBoxIcon /> : <SmallCheckBoxIcon />}</div>
      <div className="flex grow">
        <div className="w-[86px] h-[86px] rounded-[10px] bg-gray_04">
          <Image src="/img/image 68.png" alt="thumnail" width={62} height={62} className="p-3 box-content" />
        </div>
        {/* todo: 상품 정보 props 내려주기 */}
        <CartItemInfo />
      </div>
      {/* todo: 삭제기능 연결 */}
      <CloseIcon />
    </div>
  );
}

type CartItemInfoPropsType = {
  name?: string;
  price?: number;
  discount?: number;
};
function CartItemInfo({ name = '상품이름', price = 5000, discount = 500 }: CartItemInfoPropsType) {
  const originalPrice = price.toLocaleString('ko-KR');
  const discountedPrice = (price - discount).toLocaleString('ko-KR');
  return (
    <div className="pl-3 flex flex-col justify-between">
      <div className="flex flex-col">
        {/* 상품명 */}
        <h3 className="text-label-sm">{name}</h3>
        {/* 할인적용 가격 */}
        <span className="text-label-sm font-bold">{discountedPrice}원</span>
        {/* 정가 */}
        <span className="text-label-xs text-gray_01 line-through">{originalPrice}원</span>
      </div>
    </div>
  );
}
