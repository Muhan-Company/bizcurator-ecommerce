import getDelivreryStateToString from '@/utils/getDelivreryStateToString';
import Image from 'next/image';

type OrderItemProps = {
  image?: string;
  name?: string;
  amount?: number;
  delivery_state?: number;
  children?: React.ReactNode;
};
export default function OrderItem({
  image = '/img/image 68.png',
  name = '호텔용 타월',
  amount = 4000000,
  delivery_state = 0,
  children,
}: OrderItemProps) {
  const currnetState = getDelivreryStateToString(delivery_state);
  return (
    <div className="py-3 border-b-[1px] border-b-gray_02">
      <div className="center">
        <div className="w-[86px] md:w-[120px] h-[86px] md:h-[120px] rounded-[10px] bg-gray_04 p-3 box-border">
          <Image src={image} alt="thumbnail" width={86} height={86} className="w-full	h-full md:object-cover" />
        </div>
        <div className="grow flex flex-col">
          <OrderItemInfo title="상품명" value={name} />
          <OrderItemInfo title="결제금액" value={amount.toLocaleString('kr-KR') + '원'} />
          <OrderItemInfo title="주문상태" value={currnetState} />
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
function OrderItemInfo({ title, value }: OrderItemInfoProps) {
  return (
    <div className="pl-6 pr-1.5 pb-1 center-between text-label-sm">
      <h3 className="text-gray_01">{title}</h3>
      <span className={`${title === '주문상태' && 'font-bold'}`}>{value}</span>
    </div>
  );
}
