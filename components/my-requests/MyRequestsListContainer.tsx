import DateFilter from '../orders/DateFilter';
import MyRequestsListTable from './MyRequestsListTable';
import { RequestsStateList } from './RequestsState';

export default function MyRequestsListContainer() {
  const tableData = [
    { requestId: 1, createdAt: '2023-05-01', requestType: '제품구매 의뢰', state: '승인', category: '객실용품' },
    { requestId: 2, createdAt: '2023-05-01', requestType: '제품제작 의뢰', state: '대기', category: '사무용품' },
    { requestId: 3, createdAt: '2023-05-01', requestType: '판매입점 의뢰', state: '반려', category: '작품 제작' },
  ];
  return (
    <div>
      <DateFilter />
      <RequestsStateList />
      <MyRequestsListTable data={tableData} />
    </div>
  );
}
