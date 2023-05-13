export default function MyInfo() {
  return (
    <div className="mt-10 px-3">
      <h1 className="font-bold text-gray_01 text-body-md">구매 담당자 직통번호</h1>
      <h3 className="font-normal text-body-sm text-gray_01">구매 신청 및 담당 책임자의 직통 번호</h3>
      <section className="space-y-[10px] mt-4">
        <h3 className="h-[50px] bg-gray_04 rounded-lg font-normal text-gray_01 text-body-sm px-4 leading-[50px]">
          이름
        </h3>
        <h3 className="h-[50px] bg-gray_04 rounded-lg font-normal text-gray_01 text-body-sm px-4 leading-[50px]">
          번호
        </h3>
      </section>
    </div>
  );
}
