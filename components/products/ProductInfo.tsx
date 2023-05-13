export default function ProductInfo() {
  return (
    <div className="px-3 mt-6 space-y-4 mb-10">
      <section>
        <h1 className="font-bold text-title-md">야외 테이블과 의자 세트/화이트</h1>
        <h1 className="font-bold text-title-md text-main">20,000원</h1>
        <h3 className="font-normal text-gray_01 text-body-xs line-through">정가 30,000원</h3>
      </section>

      <section>
        <p className="space-x-7 -mb-1.5">
          <span className="font-normal text-body-xs text-main">구매수량</span>
          <span className="font-medium text-body-xs text-main">최소구매수량 20개</span>
        </p>
        <p className="space-x-7">
          <span className="font-normal text-body-xs text-main">배송정보</span>
          <span className="font-medium text-body-xs text-main">최소구매수량 이상 구매시 배송비 무료</span>
        </p>
      </section>
    </div>
  );
}
