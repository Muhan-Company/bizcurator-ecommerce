import React, { useState } from 'react';
import { CheckBoxIcon, CheckedBoxIcon } from '../Icons';
import CartItem, { CartItemType } from './CartItem';
import EmptyCart from './EmptyCart';
import CartPaymentAmountInfo from './CartPaymentAmountInfo';
import Link from 'next/link';
import { useGetCartList } from '@/apis/cartApis';

type CartItemPropsType = {
  // todo: api 반환값 확정시 수정
  items?: {}[];
};

export default function CartItemList({ items = [1] }: CartItemPropsType) {
  const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
  const { data } = useGetCartList();
  console.log(data);

  // todo: 전역 상태관리로 전체선택, 개별선택 기능 연결지어 관리하기
  // 전체선택 클릭시: 개별선택 체크박스 일괄 변경
  // 개별선택 클릭시: 모든 선택값 일치하지 않으면 전체선택 false, 일치하면 true
  // 방법1) items 데이터에 checked 키: boolean 키값 추가하여 전역 관리
  const allSelectHandler = () => {
    if (isAllSelected) {
      setIsAllSelected(false);
    } else {
      setIsAllSelected(true);
    }
  };

  const getTotalCost = (data: { regularPrice: number }[]) => {
    let totalCost = 0;
    data?.map((cartItem) => (totalCost += cartItem.regularPrice));

    return totalCost;
  };
  const getDiscountCost = (data: { regularPrice: number; discountPrice: number }[]) => {
    let totalDiscountCost = 0;
    data?.map((cartItem) => (totalDiscountCost += cartItem.regularPrice - cartItem.discountPrice));

    return totalDiscountCost;
  };

  return (
    <div className="relative">
      {data?.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="h-screen pt-9">
          <div className="flex items-center mb-[22px] pb-3 border-b-[1px] border-black">
            <div onClick={allSelectHandler} className="flex items-center">
              {isAllSelected ? <CheckedBoxIcon /> : <CheckBoxIcon />}
              <button className="pl-2.5 pr-4 font-medium">
                {/* todo: 선택된 개수/ 전체 개수 데이터 적용*/}
                전체선택({'/' + data?.length})
              </button>
              <div className=" text-gray_01">|{/* 가상요소 대체 */}</div>
            </div>
            {/* todo: 삭제 모달 연결 */}
            <button className="ml-4 font-medium">선택삭제</button>
          </div>
          {data?.map((cartItem: CartItemType, index: number) => (
            <CartItem
              key={index}
              cartItem={cartItem}
              isAllSelected={isAllSelected}
              setIsAllSelected={setIsAllSelected}
            />
          ))}

          <CartPaymentAmountInfo
            // totalCost={data[0]?.regularPrice}
            totalCost={getTotalCost(data)}
            // totalDiscount={data[0]?.regularPrice - data[0]?.discountPrice}
            totalDiscount={getDiscountCost(data)}
          />
          <div className="btn-mobile center gap-[7px]">
            {/* todo: 바로구매 페이지로 이동 */}
            <Link href="/" className="w-[172px] h-[50px] btn-white grow py-[19px]">
              다른 제품 보기
            </Link>
            {/* todo: 결제 페이지로 이동 */}
            <button className="w-[172px] h-[50px] btn-primary grow py-[19px]">구매하기</button>
          </div>
        </div>
      )}
    </div>
  );
}
