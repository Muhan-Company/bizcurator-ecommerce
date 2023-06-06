import { ReqDetails } from './Manufactureform';
import NumTwo from './numbers/NumTwo';
import One from './numbers/One';
import Six from './numbers/Six';

export default function PartnerForm({
  category,
  productName,
  productDetail,
  requestContext,
  image,
  companyIntroduction,
  establishYear,
}: ReqDetails) {
  const formValues1 = {
    title: '생산하시는 제품의 종류를 기입해주세요',
    category,
    productDetail,
    productName,
  };

  const formValues2 = {
    title: '설립연도',
    description: '회사를 설립한 년도를 기입해주세요',
    establishYear,
  };

  const formValues6 = {
    title: '회사 소개글',
    description: '회사 소개글을 적어주세요',
    image,
    companyIntroduction,
    requestContext,
  };

  return (
    <div className="mx-3 mb-40">
      <One formValues1={formValues1} />
      <NumTwo formValues2={formValues2} />
      <Six formValues6={formValues6} />
    </div>
  );
}
