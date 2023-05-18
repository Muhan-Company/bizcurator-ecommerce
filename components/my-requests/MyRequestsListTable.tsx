import { RequestsState } from './RequestsState';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MyRequestsListTableData {
  data: { requestId: number; createdAt: string; requestType: string; state: string; category: string }[];
}

export default function MyRequestsListTable({ data }: MyRequestsListTableData) {
  const router = useRouter();
  return (
    <table className="min-w-full mt-9">
      <thead>
        <tr className="text-label-sm font-medium">
          <TableHeader>번호</TableHeader>
          <TableHeader>의뢰일</TableHeader>
          <TableHeader>의뢰구분</TableHeader>
          <TableHeader>선택한 카테고리</TableHeader>
          {/* 수정 링크 랜더링 구역 확보 */}
          <TableHeader></TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          // todo: requestType에 따라 상세페이지 경로 다르게 지정
          <tr
            key={row.requestId}
            className="text-label-sm hover:bg-gray-100 hover:cursor-pointer"
            onClick={() => router.push(`/my-requests/purchase/${row.requestId}`)}
          >
            <TableData>{row.requestId}</TableData>
            <TableData>{row.createdAt}</TableData>
            <TableData className="center">
              <span className="grow">{row.requestType}</span>
              <RequestsState state={row.state} />
            </TableData>
            <TableData>{row.category}</TableData>

            {/* 대기상태 경우 수정 가능 링크 랜더링 */}
            <TableData>
              {row.state === '대기' && (
                // todo: requestType에 따라 수정페이지 경로 다르게 지정
                <Link
                  href={`/my-requests/edit/${row.requestType}/${row.requestId}`}
                  className="text-gray_01 hover:text-main hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  수정
                </Link>
              )}
            </TableData>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface TableProps {
  children?: React.ReactNode;
  className?: string;
}
function TableHeader({ children }: TableProps) {
  return <th className="px-2 py-3 border-b border-main">{children}</th>;
}

function TableData({ children, className }: TableProps) {
  return <td className={`px-2 py-4 border-b border-[#DDD] text-center ${className}`}>{children}</td>;
}
