import React from 'react';
import OrderDetailLayout from './OrderDetailLayout';

type OrderInfoProps = {
  payment_id: string | string[] | undefined;
  total_cost: number;
};
export default function OrderInfo({ payment_id, total_cost }: OrderInfoProps) {
  return (
    <OrderDetailLayout.OrderDetailTextContentLayout title="주문 정보">
      <OrderDetailLayout.OrderDetailTextContent title="주문번호" value={payment_id} className="font-medium" />
      <OrderDetailLayout.OrderDetailTextContent title="결제금액" value={total_cost?.toLocaleString('kr-KR') + '원'} />
    </OrderDetailLayout.OrderDetailTextContentLayout>
  );
}
