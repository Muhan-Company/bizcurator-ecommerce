import { useRouter } from 'next/router';

const DELEVERY_STATE: { [key: string]: string } = {
  paid: '결제완료',
  delivering: '배송중',
  deliver_done: '배송완료',
  finish: '구매확정',
};

export default function EmptyOrderList() {
  const { query } = useRouter();
  const currentPage = query?.state as string;
  return <div className="w-full h-[50vh] center text-gray_01">{DELEVERY_STATE[currentPage]} 내역이 없습니다.</div>;
}
