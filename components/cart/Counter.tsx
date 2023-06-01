import { DisabledMinusIcon, MinusIcon, PlusIcon } from '../Icons';

type CounterPropsType = {
  minimum_quantity: number;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

export default function Counter({ minimum_quantity, qty, setQty }: CounterPropsType) {
  return (
    <div className="flex items-center justify-center w-[78px] md:w-[112px] h-[26px] md:h-[36px] border-[1px] border-gray_02 rounded-[8px] box-content bg-white">
      <div className="flex items-center justify-center px-2 py-1.5">
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
          className="w-[34px] box-content text-label-sm md:text-title-md text-center"
          onChange={(e) => setQty(Number(e.target.value))}
          value={qty}
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
