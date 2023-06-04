import useToast from '@/hooks/useToast';
import Loader from '../Loader';

export interface MyInfo {
  business_name: string;
  business_number: string;
  business_registration: string;
  representative: string;
  postal_code: string;
  address: string;
  manager: string;
  manager_email: string;
  manager_phone_number: string;
}

export interface MyInfoProps {
  data: MyInfo | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export default function MyInfo({ data: myInfo, isLoading, isError, isSuccess }: MyInfoProps) {
  const showToast = useToast();

  return (
    <div className="mt-10 mx-3" onClick={() => showToast('수정은 마이페이지에서 가능합니다.')}>
      <h1 className="font-bold text-gray_01 text-body-md">구매 담당자 직통번호</h1>
      <h3 className="font-normal text-body-sm text-gray_01">구매 신청 및 담당 책임자의 직통 번호</h3>
      {isLoading && <Loader className="mt-4" />}
      {isError && <p className="text-body-md text-red font-medium mt-4">정보 불러오기 실패</p>}
      {isSuccess && (
        <section className="space-y-[10px] mt-4">
          <h3 className="my-info">{myInfo!.manager}</h3>
          <h3 className="my-info">{myInfo!.manager_phone_number}</h3>
        </section>
      )}
    </div>
  );
}
