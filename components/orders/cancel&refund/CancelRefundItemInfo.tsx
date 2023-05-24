import Image from 'next/image';
import OrderDetailLayout from '../[paymentId]/OrderDetailLayout';

type CancelItemInfoProps = {
  title: string;
  image: string;
  name: string;
  quantity: number;
  cost_per_one: number;
};
export default function CancelItemInfo({ title, image, name, quantity, cost_per_one }: CancelItemInfoProps) {
  return (
    <OrderDetailLayout.OrderDetailItemsContentLayout title={title}>
      <div className="flex">
        <div className="w-[86px] md:w-[120px] h-[86px] md:h-[120px] rounded-[10px] bg-gray_04 p-3 box-border">
          <Image src={image} alt="thumbnail" width={86} height={86} className="w-full	h-full md:object-cover" />
        </div>
        <div className="pl-[10px] pt-[6px] grow flex flex-col">
          <div className="pb-3 text-label-sm">{name}</div>
          <div className="text-label-xs">
            <span className="pr-[10px] border-r-[1px] border-r-[#DDD]">{cost_per_one.toLocaleString('kr-KR')}원</span>
            <span className="pl-[10px]">{quantity}개</span>
          </div>
        </div>
      </div>
    </OrderDetailLayout.OrderDetailItemsContentLayout>
  );
}
