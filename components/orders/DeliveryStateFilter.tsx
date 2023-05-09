import { useState } from 'react';

const DELIVERY_STATE = ['결제완료', '배송중', '배송완료', '구매확정'];

export default function DeliveryStateFilter() {
  const [active, setActive] = useState(0);
  return (
    <div className="center justify-between px-[18.5px] pt-6 pb-7">
      {DELIVERY_STATE.map((state, index) => (
        <DeliveryStateFilterButton
          key={index}
          index={index}
          count={0}
          state={state}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
}

type DeliveryStateButtonProps = {
  index: number;
  count: number;
  state: string;
  active: number;
  setActive: (active: number) => void;
};

function DeliveryStateFilterButton({ index, count, state, active, setActive }: DeliveryStateButtonProps) {
  return (
    <div
      className={`w-14 center flex-col ${
        DELIVERY_STATE[active] === state ? 'text-primary' : 'text-gray_01'
      } cursor-pointer`}
      onClick={(e) => setActive(index)}
    >
      <div className="text-[20px] font-bold">{count}</div>
      <div className="text-label-sm">{state}</div>
    </div>
  );
}
