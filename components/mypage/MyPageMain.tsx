import Link from 'next/link';
import { ChevronRightIcon, SettingIcon } from '../Icons';

export default function MyPageMain() {
  return (
    <div className="pt-[52px]">
      <section className="flex items-center justify-between">
        {/* 로그인 회원 이름 */}
        <div className="font-medium">{'name'}님</div>
        <Link href="/mypage/edit">
          <SettingIcon />
        </Link>
      </section>
      <section className="pt-[34px]">
        <h3 className="font-medium">
          주문/배송/픽업 현황<span className="pl-[6px] text-label-sm font-normal text-gray_01">(최근 3개월 기준)</span>
        </h3>
        <div className="py-5 center gap-2.5">
          <OrderStateLink path="/orders/payment-confirmed" state="결제완료" />
          <OrderStateLink path="/orders/shipping-in-progress" state="배송중" />
          <OrderStateLink path="/orders/delivered" state="배송완료" />
          <OrderStateLink path="/orders/purchase-confirmed" state="구매확정" />
        </div>
      </section>
      <section className="pt-2">
        <NavLink path="/cancel-refund/cancel" nav="주문취소/환불 내역" />
        <NavLink path="/my-requests" nav="내 의뢰 내역" />
        <NavLink path="/customer" nav="고객센터" />
        {/* todo: 로그아웃 api 연결 */}
        <NavLink path="/" nav="로그아웃" onClick={() => ''} />
      </section>
    </div>
  );
}

type OrderStateLinkProps = {
  path: string;
  count?: number;
  state?: string;
};
function OrderStateLink({ path, count = 0, state }: OrderStateLinkProps) {
  return (
    <Link
      href={path}
      className="w-[80px] h-[84px] center flex-col justify-between py-[14px] rounded-[10px] bg-gray_03 shadow-[0_2px_8px_0px_rgba(0,0,0,0.08)]"
    >
      <div className="text-[20px] font-bold">{count}</div>
      <div className="text-label-sm">{state}</div>
    </Link>
  );
}

type NavLinkProps = {
  path: string;
  nav: string;
  onClick?: () => void;
};
function NavLink({ path, nav }: NavLinkProps) {
  return (
    <Link
      href={path}
      className="py-[17.5px] flex items-center justify-between border-b-[1px] border-b-gray_02 text-label-sm text-gray_01"
    >
      <div>{nav}</div>
      <ChevronRightIcon color="#999" />
    </Link>
  );
}
