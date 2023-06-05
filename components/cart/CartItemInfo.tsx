import { useEffect, useState } from 'react';
import Counter from './Counter';
import { CartItemType } from './CartItemList';

export default function CartItemInfo({
  item,
  handleQtyChange,
}: {
  item: CartItemType;
  handleQtyChange: (itemId: number, quantity: number) => void;
}) {
  const { quantity, regular_price, discount_price, name, minimum_quantity, product_id } = item;
  const [qty, setQty] = useState<number>(quantity);

  const regularPrice = (regular_price * qty).toLocaleString('ko-KR');
  const discountPrice = (discount_price * qty).toLocaleString('ko-KR');

  useEffect(() => {
    handleQtyChange(product_id, qty);
  }, [product_id, qty]);

  return (
    <div className="pl-3 flex flex-col md:grow md:flex-row md:items-center justify-between md:justify-around">
      <div className="flex flex-col md:grow md:flex-row md:items-center md:justify-between">
        {/* 상품명 */}
        <h3 className="text-label-sm md:text-[20px] font-medium">{name}</h3>
        <div className="flex flex-col md:text-end">
          {/* 할인적용 가격 */}
          <span className="text-label-sm md:text-title-lg font-bold">{discountPrice}원</span>
          {/* 정가 */}
          <span className="text-label-xs md:text-body-sm text-gray_01 line-through">{regularPrice}원</span>
        </div>
      </div>
      {/* 최소수량 입력받기 */}
      <div className="md:absolute">
        <Counter minimum_quantity={minimum_quantity} qty={qty} setQty={setQty} />
      </div>
    </div>
  );
}
