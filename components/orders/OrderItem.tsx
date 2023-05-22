import Image from 'next/image';

type OrderItemProps = {
  image?: string;
  name?: string;
  amount?: number;
  deliveryState?: string;
  children?: React.ReactNode;
  item: ItemData;
};
export interface ItemData {
  orderId: number;
  image: string;
  costPerOne?: number;
  deliveryState: string;
  orderTime?: string;
  name: string;
  quantity: number;
  cost: number;
}
export default function OrderItem({ children, item }: OrderItemProps) {
  return (
    <div className="py-3 border-b-[1px] border-b-gray_02">
      <div className="center">
        <div className="w-[86px] md:w-[120px] h-[86px] md:h-[120px] rounded-[10px] bg-gray_04 p-3 box-border">
          <Image src={item?.image} alt="thumbnail" width={86} height={86} className="w-full	h-full md:object-cover" />
        </div>
        <div className="grow flex flex-col">
          <OrderItemInfo title="상품명" value={item?.name} />
          <OrderItemInfo title="결제금액" value={item?.cost.toLocaleString('kr-KR') + '원'} />
          <OrderItemInfo title="주문상태" value={item?.deliveryState} />
        </div>
      </div>
      {children}
    </div>
  );
}

type OrderItemInfoProps = {
  title?: string;
  value?: string | number;
};
export function OrderItemInfo({ title, value }: OrderItemInfoProps) {
  return (
    <div className="pl-6 pr-1.5 pb-1 center-between text-label-sm">
      <h3 className="text-gray_01">{title}</h3>
      <span className={`${title?.includes('상태') && 'font-bold'}`}>{value}</span>
    </div>
  );
}
