import RequestDetailHeader from '@/components/my-requests/RequestDetailHeader';
import PurchaseForm from '@/components/request/PurchaseForm';
import ManufactureForm from '../request/ManufactureForm';
import { useRouter } from 'next/router';

export default function RequestDetailContainer() {
  const { pathname } = useRouter();
  return (
    <div>
      <RequestDetailHeader state={'반려'} />
      <div className="opacity-50 cursor-not-allowed	">
        {/* todo: 페이지 경로에 따라 다른 폼 보여주기 */}
        {pathname.includes('purchase') ? (
          <PurchaseForm />
        ) : pathname.includes('manufacture') ? (
          <ManufactureForm />
        ) : (
          <div>판매의뢰 폼</div>
        )}
      </div>
    </div>
  );
}
