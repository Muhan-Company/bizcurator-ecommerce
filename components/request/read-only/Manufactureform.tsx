import Five from './numbers/Five';
import Four from './numbers/Four';
import One from './numbers/One';
import Six from './numbers/Six';
import Three from './numbers/Three';
import Two from './numbers/Two';

interface ReqDetails {
  category: string;
  categoryId: number;
  companyIntroduction: string;
  desiredDeliveryDate: string;
  desiredEstimateDate: string;
  establishYear: number;
  image: string;
  productDetail: string;
  productName: string;
  quantity: number;
  requestContext: string;
  requestId: number;
}

export interface FormValues {
  title: string;
  description: string;
}

export default function Manufactureform({
  category,
  productName,
  productDetail,
  quantity,
  desiredDeliveryDate,
  desiredEstimateDate,
  image,
  requestContext,
}: ReqDetails) {
  const formValues1 = {
    category,
    productName,
    title: '제품제작 의뢰',
    description: '제품을 만들고자 하는 목적을 고르고 제품 이름을 입력해주세요',
  };

  const formValues2 = {
    title: '제작하고자 하는 제품 설명',
    description: '만들고자 하는 제품의 컨셉 또는 용도를 설명해주세요',
    productDetail,
  };

  const formValues3 = {
    title: '3. 제작 수량',
    description: '만들고자 하는 제품 예상 수량을 작성해주세요',
    quantity,
  };

  const formValues4 = {
    title: '견적 수령 희망일',
    description: '신청 문의 후, 견적을 받아보고 싶은 날짜를 작성해주세요',
    desiredEstimateDate,
  };

  const formValues5 = {
    title: '제품 배송 희망일',
    description: '희망 납품(예상)일 혹은 기한을 작성해주세요. 견적에 따라 실제 납품일은 변경될 수 있습니다.',
    desiredDeliveryDate,
  };

  const formValues6 = {
    title: '6. 제품 이미지',
    description:
      '요청사항이나 유사 컨셉의 제품 혹은 이미지나 스케치를 첨부해주세요. 만들고자 하는 제품의 크기, 두께, 재질, 특징들을 상세하게 입력해주세요(e.g, 실리콘, 아크릴7mm, 가로세로 높이: ...mm 등, 상세한 요청사항을 적어주시면 요청하신 부분을 잘 반영하여 제품을 제작할 확률이 높아집니다. 상세하게 작성 부탁드립니다)',
    requestContext,
    image,
  };

  return (
    <div className="mx-3 mb-40">
      <One formValues1={formValues1} />
      <Two formValues2={formValues2} />
      <Three formValues3={formValues3} />
      <Four formValues4={formValues4} />
      <Five formValues5={formValues5} />
      <Six formValues6={formValues6} />
    </div>
  );
}
