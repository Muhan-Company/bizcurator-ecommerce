import { useRouter } from 'next/router';
import RequestDetailInfo from '@/components/my-requests/RequestDetailInfo';

interface RequestDetailHeader {
  state: string;
}
export default function RequestDetailHeader({ state }: RequestDetailHeader) {
  const { query } = useRouter();
  return (
    <div className="pb-8">
      <RequestDetailInfo title="의뢰번호" value={query.id as string} />
      <RequestDetailInfo title="의뢰상태" value={state} className={state === '반려' && 'text-red'}>
        {state === '반려' && <p className="pt-2 text-body-sm text-gray_01">주문 수량이 부족합니다</p>}
      </RequestDetailInfo>
    </div>
  );
}
