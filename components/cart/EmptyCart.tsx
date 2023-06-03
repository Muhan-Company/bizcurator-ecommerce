import Link from 'next/link';

export default function EmptyCart() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-gray_01">
        장바구니에 담긴 제품이 없습니다.
      </div>
      {/* 바로구매 페이지로 이동 */}
      <Link
        href={'/products/categories/0?sort=newest'}
        className="py-[18px] w-[351px] btn-mobile btn-primary absolute bottom-[26px] left-1/2 -translate-x-1/2"
      >
        구매하러 가기
      </Link>
    </>
  );
}
