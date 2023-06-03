import RequestDetailHeader from '@/components/my-requests/RequestDetailHeader';
import { useRouter } from 'next/router';
import Header2 from '../header/Header2';
import useReqDetails from '@/hooks/useReqDetails';
import Manufactureform from '../request/read-only/Manufactureform';
import getKorReqType from '@/utils/getKorReqType';
import Loader from '../Loader';
import Purchaseform from '../request/read-only/PurchaseForm';
import PartnerForm from '../request/read-only/PartnerForm';

export default function RequestDetailContainer() {
  const { pathname, query } = useRouter();

  const reqId = query && Number(query.id);
  const reqType = pathname.split('/')[2];
  const reqState = query.state as string;

  const { data: reqDetails, isLoading, isError, isSuccess } = useReqDetails({ reqId, reqType });

  const korReqType = getKorReqType(reqType) as string;

  return (
    <>
      <Header2 text={korReqType} />
      {isLoading && <Loader className="h-[494px]" />}
      {isError && <p className="text-red font-medium text-lg">상세 내역 조회 실패</p>}
      {isSuccess && (
        <>
          <RequestDetailHeader state={reqState} />
          <div className="opacity-50 cursor-not-allowed">
            {/* todo: 페이지 경로에 따라 다른 폼 보여주기 */}
            {pathname.includes('purchase') ? (
              <Purchaseform {...reqDetails} />
            ) : pathname.includes('make') ? (
              <Manufactureform {...reqDetails} />
            ) : (
              <PartnerForm {...reqDetails} />
            )}
          </div>
        </>
      )}
    </>
  );
}
