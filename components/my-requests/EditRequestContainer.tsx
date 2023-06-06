import { useRouter } from 'next/router';
import RequestDetailInfo from './RequestDetailInfo';
import useReqDetails from '@/hooks/useReqDetails';
import PurchaseForm from '../request/read-write/PurchaseForm';
import Header2 from '../header/Header2';
import getKorReqType from '@/utils/getKorReqType';
import Loader from '../Loader';
import ManufactureForm from '../request/read-write/ManufactureForm';
import PartnerForm from '../request/read-write/PartnerForm';

export default function EditRequestContainer() {
  const { query } = useRouter();
  const reqId = Number(query.id);
  const reqType = query.reqType as string;

  const { data: reqDetails, isLoading, isError, isSuccess } = useReqDetails({ reqId, reqType });

  const text = getKorReqType(reqType[0])?.replace('확인', '수정 및 확인');
  return (
    <>
      <Header2 text={text} />
      <RequestDetailInfo title={'의뢰번호'} value={query.id as string} />
      {isLoading && <Loader className="h-[494px]" />}
      {isError && <p className="text-red font-medium text-lg">수정 내역 조회 실패</p>}
      {isSuccess && reqType[0] === 'purchase' && <PurchaseForm {...reqDetails} />}
      {isSuccess && reqType[0] === 'make' && <ManufactureForm {...reqDetails} />}
      {isSuccess && reqType[0] === 'sell' && <PartnerForm {...reqDetails} />}
    </>
  );
}
