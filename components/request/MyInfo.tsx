import useToast from '@/hooks/useToast';

export default function MyInfo() {
  const showToast = useToast();

  return (
    <div className="mt-10 mx-3" onClick={() => showToast('수정은 마이페이지에서 가능합니다.')}>
      <h1 className="font-bold text-gray_01 text-body-md">구매 담당자 직통번호</h1>
      <h3 className="font-normal text-body-sm text-gray_01">구매 신청 및 담당 책임자의 직통 번호</h3>
      <section className="space-y-[10px] mt-4">
        <h3 className="my-info"></h3>
        <h3 className="my-info"></h3>
      </section>
    </div>
  );
}
