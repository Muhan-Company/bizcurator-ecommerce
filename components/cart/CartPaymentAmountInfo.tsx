type CartPaymentAmountProps = {};

export default function CartPaymentAmountInfo() {
  return (
    <section>
      <h3 className="pt-7 pb-3 border-b-[1px] border-b-black font-medium">결제정보</h3>
      <div
        className="pt-6 pb-2 border-b-[1px] border-b-
gray_02"
      >
        {/* 체크된 상품의 정가 * 수량 계산 금액 */}
        <Amount title="총 상품금액" price={5000 * 10} />
        {/* 체크된 상품의 할인 금액 * 수량 계산 금액 */}
        <Amount title="할인금액" price={-500 * 10} />
      </div>
      <div className="flex items-center justify-between py-6">
        <h2 className="text-title-xs font-medium">최종결제금액</h2>
        {/* 체크된 상품의 (정가 * 수량 - 할인 금액 * 수량) 계산 금액 */}
        <span className="text-red font-medium">
          {(5000 * 10 - 500 * 10).toLocaleString('ko-KR')}
          <span className="text-main">원</span>
        </span>
      </div>
    </section>
  );
}

type AmountProps = {
  title: string;
  price: number;
};

function Amount({ title, price }: AmountProps) {
  return (
    <div className="flex items-center justify-between pb-4">
      <h4 className="text-title-xs">{title}</h4>
      <span>{price.toLocaleString('ko-KR')}원</span>
    </div>
  );
}
