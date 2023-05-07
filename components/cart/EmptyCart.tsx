import Link from 'next/link';

export default function EmptyCart() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center m-auto text-gray_01">
        장바구니에 담긴 제품이 없습니다.
      </div>
      {/* 바로구매 페이지로 이동 */}
      <Link href="/" className="btn-mobile btn-primary">
        <span className="py-[18px]">구매하러 가기</span>
      </Link>
    </>
  );
}
