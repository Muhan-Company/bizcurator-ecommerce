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

export default function Purchaseform({
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
    title: '구매 희망 품목',
    description: '구매하고자 하는 상품의 카테고리를 선택하시고 상품명을 입력하세요',
  };

  const formValues2 = {
    title: '제품 성분명',
    description: '구매하고자 하는 제품의 성분 및 색상을 간단하게 설명해주세요( e.g., 액체형 샴푸, 흰색 슬리퍼)',
    productDetail,
  };

  const formValues3 = {
    title: '3. 구매 수량',
    description: '구매하고자 하는 제품 예상 수량을 작성해주세요',
    quantity,
  };

  const formValues4 = {
    title: '견적 수령 희망일',
    description: '신청 문의 후, 견적을 받아보고 싶은 날짜를 작성해주세요',
    desiredEstimateDate,
  };

  const formValues5 = {
    title: '제품 배송 희망일',
    description: '판매사의 제품이 최종 낙찰된 후, 희망 납품(예상)일 혹은 기한을 작성해주세요',
    desiredDeliveryDate,
  };

  const formValues6 = {
    title: '6. 제품 이미지',
    description:
      '요청사항이나 유사 컨셉의 제품 혹은 현재 사용 중인 제품의 이미지나 스케치를 첨부해주세요. (상세한 요청사항을 적어주시면 요청하신 부분과 일치하는 제품의 견적을 받을 확률이 높아집니다. 상세하게 작성 부탁드립니다)',
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
