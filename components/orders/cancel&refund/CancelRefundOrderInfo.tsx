import React from 'react';
import OrderDetailLayout from '../[paymentId]/OrderDetailLayout';
import getDelivreryStateToString from '@/utils/getDelivreryStateToString';
import { useRouter } from 'next/router';

type OrderInfoProps = {
  total_cost: number;
  delivery_state: number;
};
export default function CancelOrderInfo({ total_cost, delivery_state }: OrderInfoProps) {
  const { query } = useRouter();

  const currentState = getDelivreryStateToString(delivery_state);
  return (
    <OrderDetailLayout.OrderDetailTextContentLayout title="주문 정보">
      <OrderDetailLayout.OrderDetailTextContent title="주문번호" value={query.orderId} />
      <OrderDetailLayout.OrderDetailTextContent title="결제금액" value={`${total_cost.toLocaleString('kr-KR')}원`} />
      <OrderDetailLayout.OrderDetailTextContent title="주문상태" value={currentState} className="font-medium" />
    </OrderDetailLayout.OrderDetailTextContentLayout>
  );
}
