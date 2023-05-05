import Image from 'next/image';
import React, { useState } from 'react';
import { CheckBoxIcon, CheckedBoxIcon, CloseIcon, DisabledMinusIcon, MinusIcon, PlusIcon } from '../Icons';

type CartItemPropsType = {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CartItem({ isSelected, setIsSelected }: CartItemPropsType) {
  return (
    <div className="flex md:items-center md:w-[800px] py-[22px] border-b-[1px] border-b-gray_02">
      <div className="pr-3 md:pl-7" onClick={() => setIsSelected(!isSelected)}>
        {isSelected ? <CheckedBoxIcon /> : <CheckBoxIcon />}
      </div>
      <div className="flex grow">
        <div className="w-[86px] md:w-[120px] h-[86px] md:h-[120px] rounded-[10px] bg-gray_04 p-3 box-content">
          <Image
            src="/img/image 68.png"
            alt="thumnail"
            width={62}
            height={62}
            className="w-full	h-full md:object-cover"
          />
        </div>
        {/* todo: 상품 정보 props 내려주기 */}
        <CartItemInfo />
      </div>
      {/* todo: 삭제기능 연결 */}
      <div className="pr-[10px] md:ml-6 md:flex md:items-center">
        <CloseIcon />
      </div>
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
      <Counter min={10} />
    </div>
  );
}

type CounterPropsType = {
  min: number;
};
function Counter({ min }: CounterPropsType) {
  const [quantity, setQuantity] = useState(min);
  return (
    <div className="flex items-center justify-center  w-[78px] md:w-[112px] h-[26px] md:h-[36px] border-[1px] border-gray_02 rounded-[8px] box-content md:absolute">
      <div className="flex items-center justify-center px-2 py-1.5">
        {min !== quantity ? (
          <div onClick={() => setQuantity(quantity! - 1)}>
            <MinusIcon />
          </div>
        ) : (
          <div>
            <DisabledMinusIcon />
          </div>
        )}
        <input
          className="w-[34px] box-content text-label-sm md:text-title-md text-center"
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
          // 최소수량 보다 작게 입력 후 input창 블러시 최소수량으로 재지정
          onBlur={(e) => Number(e.target.value) < min && setQuantity(min)}
        />
        <div onClick={() => setQuantity(quantity! + 1)}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}
