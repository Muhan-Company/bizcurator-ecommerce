import { useGetMyInfo } from '@/apis/users';
import useToast from '@/hooks/useToast';
import Loader from '../products/Loader';

export default function MyInfo() {
  const showToast = useToast();
  const { data: info, isLoading, error } = useGetMyInfo();

  return (
    <div className="mt-10 mx-3" onClick={() => showToast('수정은 마이페이지에서 가능합니다.')}>
      <h1 className="font-bold text-gray_01 text-body-md">구매 담당자 직통번호</h1>
      <h3 className="font-normal text-body-sm text-gray_01">구매 신청 및 담당 책임자의 직통 번호</h3>
      {isLoading && <Loader className="mt-4" />}
      {error instanceof Error && <p className="text-body-md text-red font-medium mt-4">정보 불러오기 실패</p>}
      <section className="space-y-[10px] mt-4">
        <h3 className="my-info">{info?.manager}</h3>
        <h3 className="my-info">{info?.manager_phone_number}</h3>
      </section>
    </div>
  );
}
