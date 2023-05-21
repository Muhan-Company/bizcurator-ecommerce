import PurchaseForm from '@/components/request/PurchaseForm';
import ManufactureForm from '../request/ManufactureForm';
import { useRouter } from 'next/router';
import RequestDetailInfo from './RequestDetailInfo';

export default function EditRequestContainer() {
  const { pathname, query } = useRouter();
  return (
    <div>
      <RequestDetailInfo title={'의뢰번호'} value={query.reqType![1]} />
      {/* todo: 페이지 경로에 따라 다른 폼 보여주기 */}
      {pathname.includes('purchase') ? (
        <PurchaseForm />
      ) : pathname.includes('manufacture') ? (
        <ManufactureForm />
      ) : (
        <div>판매의뢰 폼</div>
      )}
    </div>
  );
}
