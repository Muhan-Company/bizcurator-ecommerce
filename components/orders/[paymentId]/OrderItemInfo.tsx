import React from 'react';
import OrderDetailLayout from './OrderDetailLayout';
import OrderItem from '../OrderItem';
import Link from 'next/link';

type OrderItemInfoProps = {
  orderId: number;
  deliveryState: string;
  item: OrderItem;
};
export interface OrderItem {
  orderId: number;
  productImage: string;
  deliveryState: string;
  productName: string;
  quantity: number;
  cost: number;
}
export default function OrderItemInfo({ orderId, deliveryState, item }: OrderItemInfoProps) {
  const setData = {
    orderId: item.orderId,
    image: item.productImage,
    deliveryState: item.deliveryState,
    name: item.productName,
    quantity: item.quantity,
    cost: item.cost,
  };
  return (
    <OrderDetailLayout.OrderDetailItemsContentLayout title="주문 제품 정보">
      <OrderItem item={setData}>
        {/* 주문상태: 구매확정시 모든 버튼 안보임 */}
        {/* 주문상태: 배송완료시 환불, 배송조회, 구매확정 버튼 보임 */}
        {/* 주문상태: 결제완료시 주문취소, 구매확정 버튼 보임 */}
        {/* 주문상태: 배송중일시 배송조회, 구매확정 버튼 보임 */}
        {deliveryState !== '구매확정' && (
          <div className="flex justify-end text-label-sm">
            {deliveryState === '배송완료' && (
              <Link href={`/orders/refund/${orderId}`} className="btn-order-detail">
                환불
              </Link>
            )}
            {deliveryState === '결제완료' && (
              <Link href={`/orders/cancel/${orderId}`} className="btn-order-detail">
                주문취소
              </Link>
            )}
            {deliveryState !== '결제완료' && <button className="btn-order-detail">배송조회</button>}
            <button className="btn-order-detail">구매확정</button>
          </div>
        )}
      </OrderItem>
    </OrderDetailLayout.OrderDetailItemsContentLayout>
  );
}
