import PurchaseForm from '@/components/request/PurchaseForm';
import ManufactureForm from '../request/ManufactureForm';
import { useRouter } from 'next/router';
import RequestDetailInfo from './RequestDetailInfo';
import useReqDetails from '@/hooks/useReqDetails';
import PartnerForm from '../request/PartnerForm';
import { useSetRecoilState } from 'recoil';
import reqDetailsState from '@/atoms/reqDetailsAtom';
import { useEffect } from 'react';

export default function EditRequestContainer() {
  const { query } = useRouter();
  const reqId = Number(query.id);
  const reqType = query.reqType as string;

  const { data, isLoading, isError } = useReqDetails({ reqId, reqType });

  const setReqDetails = useSetRecoilState(reqDetailsState);

  useEffect(() => {
    if (data) {
      setReqDetails(data);
    }
  }, [data, setReqDetails]);

  return (
    <div>
      <RequestDetailInfo title={'의뢰번호'} value={query.id as string} />
      {/* {reqType === 'make' && <ManufactureForm {...details} />}
      {reqType === 'purchase' && <PurchaseForm {...details} />}
      {reqType === 'sell' && <PartnerForm {...details} />} */}
    </div>
  );
}
