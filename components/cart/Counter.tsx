import { useState } from 'react';
import { DisabledMinusIcon, MinusIcon, PlusIcon } from '../Icons';

type CounterPropsType = {
  min: number;
};

export default function Counter({ min }: CounterPropsType) {
  const [quantity, setQuantity] = useState(min);

  return (
    <div className="flex items-center justify-center  w-[78px] md:w-[112px] h-[26px] md:h-[36px] border-[1px] border-gray_02 rounded-[8px] box-content bg-white">
      <div className="flex items-center justify-center px-2 py-1.5">
        {min !== quantity ? (
          <div onClick={() => setQuantity(quantity! - 1)}>
            <MinusIcon />
          </div>
        ) : (
          <div>
            <DisabledMinusIcon />
          </div>
        )}
        <input
          className="w-[34px] box-content text-label-sm md:text-title-md text-center"
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
          // 최소수량 보다 작게 입력 후 input창 블러시 최소수량으로 재지정
          onBlur={(e) => Number(e.target.value) < min && setQuantity(min)}
        />
        <div onClick={() => setQuantity(quantity! + 1)}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}
