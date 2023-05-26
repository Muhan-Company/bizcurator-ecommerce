import RequestDetailHeader from '@/components/my-requests/RequestDetailHeader';
import PurchaseForm from '@/components/request/PurchaseForm';
import ManufactureForm from '../request/ManufactureForm';
import { useRouter } from 'next/router';
import { useGetMyInfo } from '@/apis/users';

export default function RequestDetailContainer() {
  const { pathname } = useRouter();
  const info = useGetMyInfo();

  return (
    <div>
      <RequestDetailHeader state={'반려'} />
      <div className="opacity-50 cursor-not-allowed	">
        {/* todo: 페이지 경로에 따라 다른 폼 보여주기 */}
        {pathname.includes('purchase') ? (
          <PurchaseForm {...info} />
        ) : pathname.includes('manufacture') ? (
          <ManufactureForm {...info} />
        ) : (
          <div>판매의뢰 폼</div>
        )}
      </div>
    </div>
  );
}
