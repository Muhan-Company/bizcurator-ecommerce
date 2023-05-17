import Image from 'next/image';
import React from 'react';
import { OrderItemInfo } from '../orders/OrderItem';

type CancelRefundOrderItemProps = {
  image?: string;
  name?: string;
  cost?: number;
  state?: string;
};
export default function CancelRefundOrderItem(props: CancelRefundOrderItemProps) {
  const { image, name, cost, state } = props;
  return (
    <div className="py-3 border-b-[1px] border-b-gray_02">
      <div className="center">
        <div className="w-[86px] md:w-[120px] h-[86px] md:h-[120px] rounded-[10px] bg-gray_04 p-3 box-border">
          <Image src={image ?? ''} alt="thumbnail" width={86} height={86} className="w-full	h-full md:object-cover" />
        </div>
        <div className="grow flex flex-col">
          <OrderItemInfo title="상품명" value={name} />
          <OrderItemInfo title="결제금액" value={cost?.toLocaleString('kr-KR') + '원'} />
          <OrderItemInfo title="취소상태" value={state} />
        </div>
      </div>
    </div>
  );
}
