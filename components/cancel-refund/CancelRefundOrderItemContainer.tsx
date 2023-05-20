import React from 'react';
import CancelRefundOrderItem from './CancelRefundOrderItem';
import Link from 'next/link';

interface CancelRefundOrderItemContainerProps {
  activedTab: string;
  id: number;
  orderTime?: string;
  paymentId?: string;
  image: string;
  name: string;
  cost: number;
  state: string;
}

export default function CancelRefundOrderItemContainer(props: CancelRefundOrderItemContainerProps) {
  // 테스트를 위한 id 기본값 적용
  const { activedTab, id = 12345, orderTime, paymentId } = props;
  return (
    <section className="pt-[22px] pb-[18px] my-2">
      <div className="pb-[14px] flex flex-col border-b-[1px] border-b-black">
        <div className="pb-3 flex items-center justify-between font-medium">
          <div>{orderTime}</div>
        </div>
        <div className="text-label-sm text-gray_01">주문번호 : {paymentId}</div>
      </div>
      {/* 현재 활성화된 탭 이름(주문 취소: cancellations, 환불: refunds)으로 주소 이동 */}
      <Link href={`cancel-refund/${activedTab}/${id}`} className="hover:opacity-70">
        <CancelRefundOrderItem {...props} />
      </Link>
    </section>
  );
}
