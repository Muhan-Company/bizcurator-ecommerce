import Link from 'next/link';
import { ChevronRightIcon } from '../Icons';
import OrderItem, { ItemData } from './OrderItem';

export type OrderProps = {
  orderTime?: string;
  paymentId?: string;
  orderInfo: ItemData[];
};

export default function Order({ orderTime = '2023-04-20', paymentId = '123456546864', orderInfo }: OrderProps) {
  return (
    <section className="pt-[22px] pb-[18px] my-2">
      <div className="pb-[14px] flex flex-col border-b-[1px] border-b-black">
        <div className="pb-3 flex items-center justify-between font-medium">
          <div>{orderTime}</div>
          <Link href={`/orders/detail/${paymentId}`} className="center text-label-sm text-gray_01">
            전체주문 상세보기 <ChevronRightIcon color="#999" />
          </Link>
        </div>
        <div className="text-label-sm text-gray_01">주문번호 : {paymentId}</div>
      </div>

      {orderInfo?.map((item) => (
        <OrderItem key={item?.orderId} item={item} />
      ))}
    </section>
  );
}
