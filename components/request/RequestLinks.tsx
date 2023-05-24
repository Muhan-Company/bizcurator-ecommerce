import ActiveLink2 from './ActiveLink2';

export default function RequestLinks() {
  return (
    <div className="mt-5">
      <ActiveLink2
        className="rounded-t-lg inline-block w-1/2 text-center py-[21px] font-medium text-[15px]"
        href={'/request/purchase'}
      >
        제품 구매 의뢰
      </ActiveLink2>
      <ActiveLink2
        className="rounded-t-lg inline-block w-1/2 text-center py-[21px] font-medium text-[15px]"
        href={'/request/manufacture'}
      >
        제품 제작 의뢰
      </ActiveLink2>
    </div>
  );
}
