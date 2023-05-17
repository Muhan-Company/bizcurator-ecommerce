import { useRouter } from 'next/router';
import ActiveLink2 from './ActiveLink2';

export default function Description() {
  const router = useRouter();
  const purchasePage = router.asPath.includes('purchase');
  const manufacturePage = router.asPath.includes('manufacture');

  return (
    <div className="pt-5 px-3">
      <div className="px-3 space-y-[5px]">
        <h1 className="text-body-md text-main font-bold">
          {purchasePage && '제품 구매 의뢰'}
          {manufacturePage && '제품 제작 의뢰'}
        </h1>
        <p className="font-normal text-body-sm text-main">
          {purchasePage && (
            <span>
              아무리 찾아도 내가 원하는 제품을 찾기 어렵나요?? <br /> 대량으로 구매하고 싶지만 도매가로 구매가
              안된다구요??
            </span>
          )}
          {manufacturePage && (
            <span className="font-normal text-body-sm text-main">
              사업에 꼭 맞는 제품을 제작하고 싶으신가요? <br />
              졸업작품을 기획하고 계신가요?
            </span>
          )}
        </p>
        <p>
          {purchasePage && (
            <span className="text-body-md text-main font-bold">
              원하시는 제품을 도매가로 찾아드리고 <br /> 견적을 보내드려요
            </span>
          )}
          {manufacturePage && (
            <span className="text-body-md text-main font-bold">
              제품 목업부터 실제 제작을 위한 공정을 <br /> 저희와 함께해요
            </span>
          )}
        </p>
      </div>
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
    </div>
  );
}
