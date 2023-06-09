import Link from 'next/link';
import { ChevronRightIcon, SettingIcon } from '../Icons';
import useGetMyPage from '@/hooks/useGetMyPage';
import useGetUser from '@/hooks/useGetUser';
import Loader from '../Loader';
import useLogout from '@/hooks/useLogout';

export default function MyPageMain() {
  const { data, isSuccess, isLoading, isError } = useGetMyPage();
  const { data: myInfo, isLoading: loading, isSuccess: success, isError: error } = useGetUser();
  const logout = useLogout();

  return (
    <div className="pt-6 px-[22px]">
      <section className="flex items-center justify-between">
        {/* 로그인 회사명 */}
        <div className="text-title-md font-medium text-primary">
          {loading && <Loader />}
          {success && (myInfo?.business_name ?? '회사명이 없습니다.')}
          {error && <p className="text-red text-base">회사명 불러오기 실패</p>}
        </div>
        <Link href="/mypage/edit">
          <SettingIcon />
        </Link>
      </section>
      <section className="pt-[34px]">
        <h3 className="font-medium">
          주문/배송/픽업 현황
          <span className="pl-[6px] text-label-sm font-normal text-gray_01">(최근 3개월 기준)</span>
        </h3>
        <div className="py-5 center gap-2.5">
          {isLoading && <Loader />}
          {isError && <p className="text-red text-base font-medium">현황 불러오기 실패</p>}
          {isSuccess && (
            <>
              <OrderStateLink path="/orders/paid" state="결제완료" count={data?.payDoneCount} />
              <OrderStateLink path="/orders/delivering" state="배송중" count={data?.deliveringCount} />
              <OrderStateLink path="/orders/deliver_done" state="배송완료" count={data?.deliverDoneCount} />
              <OrderStateLink path="/orders/finish" state="구매확정" count={data?.paymentConfirmedCount} />
            </>
          )}
        </div>
      </section>
      <section className="pt-2">
        <NavLink path="/cancel-refund/" nav="주문취소/환불 내역" />
        <NavLink path={'/my-requests?filterMonth=30'} nav="내 의뢰 내역" />
        <NavLink path="/customer" nav="고객센터" />
        {/* todo: 로그아웃 api 연결 */}
        <NavLink path="/" nav="로그아웃" onClick={logout} />
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
      className="w-[80px] h-[84px] center flex-col justify-between py-[14px] rounded-[10px] bg-gray_03 shadow-[0_2px_8px_0px_rgba(0,0,0,0.08)] hover:bg-gray_02"
    >
      <div className="text-[20px] font-bold">{count}</div>
      <div className="text-label-sm">{state}</div>
    </Link>
  );
}

type NavLinkProps = {
  path: string;
  nav: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};
function NavLink({ path, nav, onClick }: NavLinkProps) {
  return (
    <Link
      href={path}
      className="py-[17.5px] flex items-center justify-between border-b-[1px] border-b-gray_02 text-label-sm text-gray_01 hover:bg-gray_03 hover:text-main"
      onClick={onClick}
    >
      <div className="pl-2.5">{nav}</div>
      <ChevronRightIcon color="#999" />
    </Link>
  );
}
