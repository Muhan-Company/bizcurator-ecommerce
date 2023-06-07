import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import { DisabledMinusIcon, MinusIcon, PlusIcon } from '../Icons';

type CounterPropsType = {
  minimum_quantity: number;
  qty: number;
  setQty: Dispatch<SetStateAction<number>>;
};

export default function Counter({ minimum_quantity, qty, setQty }: CounterPropsType) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQty(Number(e.target.value));
  };

  return (
    <div className="center w-[78px] h-[26px] border border-gray_02 rounded-[8px] box-content bg-white">
      <div className="center px-2 py-1.5">
        {minimum_quantity !== qty ? (
          <div onClick={() => setQty(qty! - 1)}>
            <MinusIcon />
          </div>
        ) : (
          <div>
            <DisabledMinusIcon />
          </div>
        )}
        <input
          type="number"
          className="w-[34px] box-content"
          onChange={handleChange}
          value={qty}
          min={minimum_quantity}
          // 최소수량 보다 작게 입력 후 input창 블러시 최소수량으로 재지정
          onBlur={(e) => Number(e.target.value) < minimum_quantity && setQty(minimum_quantity)}
        />
        <div onClick={() => setQty(qty! + 1)}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}
