import { cancelRefundTabState } from '@/atoms/cancel&refundAtoms';
import { useRecoilState } from 'recoil';
import CancelRefundOrderItemContainer from './CancelRefundOrderItemContainer';
import { useGetCancelRefundList } from '@/apis/cancel&refund';
import { selectedDateFilterState } from '@/atoms/selectedDateFilterAtom';

export default function CancelRefundOrderList() {
  const [selectedDateFilter] = useRecoilState(selectedDateFilterState);
  const [activedTab, setActivedTab] = useRecoilState(cancelRefundTabState);

  // 탭을 누를떄마다 활성탭 상태값 변경
  const tabHandler = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLButtonElement;
    setActivedTab(id);
  };

  // 메뉴 탭과 날짜 필터 누를떄마다 새로운 데이터 fetch
  const { data } = useGetCancelRefundList(activedTab, selectedDateFilter);
  console.log(data);

  return (
    <div>
      <div className="mt-2 flex items-center text-title-xs text-gray_01">
        <button
          id="cancellations"
          className={`h-[46px] grow center ${
            activedTab === 'cancellations' && 'border-b-[1px] border-b-primary text-primary'
          }`}
          onClick={tabHandler}
        >
          주문취소
        </button>
        <button
          id="refunds"
          className={`h-[46px] grow center ${
            activedTab === 'refunds' && 'border-b-[1px] border-b-primary text-primary'
          }`}
          onClick={tabHandler}
        >
          환불
        </button>
      </div>
      {/* todo: data 존재 여부에 따라 다르게 보여주기 */}
      {[data].length < 1 ? (
        <div>내역 없음</div>
      ) : (
        [data].map((order) => <CancelRefundOrderItemContainer key={order?.id} activedTab={activedTab} {...order} />)
      )}
    </div>
  );
}
