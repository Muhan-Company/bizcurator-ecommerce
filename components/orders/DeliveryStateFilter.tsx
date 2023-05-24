import { useGetMyPageMain } from '@/apis/mypage';
import { useRouter } from 'next/router';

const DELIVERY_STATE = [
  { payDoneCount: ['결제완료', 'paid'] },
  { deliveringCount: ['배송중', 'delivering'] },
  { deliverDoneCount: ['배송완료', 'deliver_done'] },
  { paymentConfirmedCount: ['구매확정', 'finish'] },
];

export default function DeliveryStateFilter() {
  const { data } = useGetMyPageMain();

  return (
    <div className="center-between px-[18.5px] pt-6 pb-7">
      {DELIVERY_STATE.map((state, index) => {
        const key = Object.keys(state)[0];
        const stateValue = Object.values(state)[0];
        return (
          <DeliveryStateFilterButton key={index} id={stateValue[1]} count={data && data[key]} state={stateValue[0]} />
        );
      })}
    </div>
  );
}

type DeliveryStateButtonProps = {
  id: string;
  count: number;
  state: string;
};

function DeliveryStateFilterButton({ id, count, state }: DeliveryStateButtonProps) {
  const { query, replace } = useRouter();

  return (
    <div
      className={`w-14 center flex-col ${query?.state === id ? 'text-primary' : 'text-gray_01'} cursor-pointer`}
      onClick={() => replace(id)}
    >
      <div className="text-[20px] font-bold">{count}</div>
      <div className="text-label-sm">{state}</div>
    </div>
  );
}
