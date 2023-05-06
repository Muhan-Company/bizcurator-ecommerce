import Image from 'next/image';
import Counter from '../cart/Counter';

type CartItemAddModalProps = {
  name?: string;
  price?: number;
  discount?: number;
  min?: number;
};

// todo: 클릭한 상품 data 가져와서 적용하기
function CartItemAddModal({
  name = '두루마리 휴지 24롤',
  price = 1000,
  discount = 10,
  min = 100,
}: CartItemAddModalProps) {
  const originalPrice = price.toLocaleString('ko-KR');
  const discountedPrice = (price - discount).toLocaleString('ko-KR');

  return (
    <div className="absolute center inset-0 z-20">
      <div className="w-[351px] h-auto pt-[30px] px-3 modal-shape flex flex-col">
        <div className="flex justify-between w-full py-[18px]">
          {/* 상품 썸네일 */}
          <div className="w-[86px] rounded-[10px] bg-gray_04 p-3 box-border">
            <Image
              src="/img/image 68.png"
              alt="thumbnail"
              width={62}
              height={62}
              className="w-full	h-full object-cover"
            />
          </div>
          {/* 상품 정보 */}
          <div className="pl-[22px] grow">
            <h3 className="font-normal">{name}</h3>
            <span className="font-bold">{discountedPrice} 원</span>
          </div>
        </div>
        {/* 수량 계산 */}
        <div className="w-full mb-10 px-2 py-[15px] flex items-center justify-between bg-gray_03">
          <Counter min={min} />
          <div className="flex flex-col text-end">
            {/* 할인적용 가격 */}
            <span className="font-bold">{discountedPrice}원</span>
            {/* 정가 */}
            <span className="text-label-sm text-gray_01 line-through">{originalPrice}원</span>
          </div>
        </div>

        <div className="center gap-2 py-6">
          {/* todo: 모달 닫기 기능 연결 */}
          <button className="btn-white w-[156px] h-[42px] py-[19px]">취소</button>
          {/* todo: 장바구니 담기 API 연결 및 장바구니 담기 성공 모달 연결 */}
          <button className="btn-primary w-[156px] h-[42px] py-[19px]">장바구니 담기</button>
        </div>
      </div>
    </div>
  );
}

const CartAddModals = {
  CartItemAddModal,
};

export default CartAddModals;
