import React from 'react';
import OrderDetailLayout from './OrderDetailLayout';
import OrderItem from '../OrderItem';
import getDelivreryStateToString from '@/utils/getDelivreryStateToString';
import Link from 'next/link';

type OrderItemInfoProps = {
  delivery_state: number;
};
export default function OrderItemInfo({ delivery_state }: OrderItemInfoProps) {
  const currentState = getDelivreryStateToString(delivery_state);
  return (
    <OrderDetailLayout title="주문 제품 정보">
      {/* todo: image, name, amount, delivery_state props 내려주기*/}
      <OrderItem delivery_state={delivery_state}>
        {/* 주문상태: 구매확정(3)시 모든 버튼 안보임 */}
        {/* 주문상태: 배송완료(2)시 환불, 배송조회, 구매확정 버튼 보임 */}
        {/* 주문상태: 결제완료(0)시 주문취소, 구매확정 버튼 보임 */}
        {/* 주문상태: 배송중(1)일시 배송조회, 구매확정 버튼 보임 */}
        {currentState !== '구매확정' && (
          <div className="flex justify-end text-label-sm">
            {currentState === '배송완료' && (
              <Link href={'/orders/refund'} className="w-[65px] h-[32px] ml-[6px] btn-white">
                환불
              </Link>
            )}
            {currentState === '결제완료' && (
              <Link href={'/orders/cancel'} className="w-[65px] h-[32px] ml-[6px] btn-white">
                주문취소
              </Link>
            )}
            {currentState !== '결제완료' && <button className="w-[65px] h-[32px] ml-[6px] btn-white">배송조회</button>}
            <button className="w-[65px] h-[32px] ml-[6px] btn-white">구매확정</button>
          </div>
        )}
      </OrderItem>
    </OrderDetailLayout>
  );
}
