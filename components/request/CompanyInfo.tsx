import useToast from '@/hooks/useToast';
import useGetUser from '@/hooks/useGetUser';
import CompanyValue from './CompanyValue';
import Loader from '../Loader';

export default function CompanyInfo() {
  const showToast = useToast();
  const { data: info, isLoading, isError } = useGetUser();

  const companyInfo = [
    { id: 1, name: '상호명', value: info?.business_name },
    { id: 2, name: '대표자명', value: info?.representative },
    { id: 3, name: '사업자번호', value: info?.business_number },
    { id: 4, name: '구매담당자 전화번호', value: info?.manager_phone_number },
  ];

  if (isLoading) return <Loader className="mt-10" />;
  if (isError) return <p className="text-body-md text-red font-medium mt-10 mx-3">정보 불러오기 실패</p>;

  return (
    <div className="mt-10 mx-3 space-y-[10px]" onClick={() => showToast('수정은 마이페이지에서 가능합니다.')}>
      {companyInfo.map((info) => (
        <CompanyValue key={info.id} {...info} />
      ))}
    </div>
  );
}
