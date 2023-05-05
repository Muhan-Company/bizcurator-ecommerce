import Link from 'next/link';

export default function EmptyCart() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center m-auto text-gray_01">
        장바구니에 담긴 제품이 없습니다.
      </div>
      <Link
        href="/"
        className="absolute bottom-[90px] flex items-center justify-center w-full rounded-[8px] bg-primary cursor-pointer"
      >
        <span className="py-[18px] text-white">구매하러 가기</span>
      </Link>
    </>
  );
}
