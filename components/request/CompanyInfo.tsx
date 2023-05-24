import useToast from '@/hooks/useToast';
import CompanyInput from './CompanyInput';

export default function CompanyInfo() {
  const showToast = useToast();
  const companyInputs = [
    { id: 1, value: '상호명' },
    { id: 2, value: '대표자명' },
    { id: 3, value: '사업자번호' },
    { id: 4, value: '구매담당자 전화번호' },
  ];
  return (
    <div className="mt-10 mx-3 space-y-[10px]" onClick={() => showToast('수정은 마이페이지에서 가능합니다.')}>
      {companyInputs.map((input) => (
        <CompanyInput key={input.id} value={input.value} />
      ))}
    </div>
  );
}
