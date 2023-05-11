import React from 'react';
import OrderDetailLayout from './OrderDetailLayout';

type OrderInfoProps = {
  payment_id: string | string[] | undefined;
  total_cost: number;
};
export default function OrderInfo({ payment_id, total_cost }: OrderInfoProps) {
  return (
    <OrderDetailLayout title="주문 정보">
      <div className="w-[180px] pt-[17px] pb-5">
        <div className="pb-[14px] flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">주문번호</h3>
          <span className="font-medium">{payment_id}</span>
        </div>
        <div className="flex text-label-sm">
          <h3 className="w-[100px] text-gray_01">결제금액</h3>
          <span>{total_cost.toLocaleString('kr-KR')}원</span>
        </div>
      </div>
    </OrderDetailLayout>
  );
}
