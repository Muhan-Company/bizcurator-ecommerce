import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import One from './Numbers/One';
import Two from './Numbers/Two';
import Three from './Numbers/Three';
import { useState } from 'react';
import Four from './Numbers/Four';
import Five from './Numbers/Five';
import Six from './Numbers/Six';

export interface IFormInputs {
  name: string;
  detail: string;
  quantity: number;
  estimateDate: Date;
  deliveryDate: Date;
  request: string;
}

export interface Category {
  id: number;
  name: string;
}

export const RequestSchema = yup
  .object({
    name: yup.string().required('상품명을 입력하세요'),
    detail: yup.string().required('상품에 대해 설명해주세요'),
    quantity: yup
      .number()
      .typeError('수량을 입력하세요') // Custom error message for non-number values
      .positive('양수를 입력하세요')
      .integer('정수를 입력하세요'),
    estimateDate: yup.date().typeError('날짜를 입력하세요'),
    deliveryDate: yup.date().typeError('날짜를 입력하세요'),
    request: yup.string().required('요청사항을 적어주세요'),
  })
  .required();

export const categories = [
  {
    id: 1,
    name: '객실용품',
  },
  {
    id: 2,
    name: '욕실용품',
  },
  {
    id: 3,
    name: '위생용품',
  },
  {
    id: 4,
    name: '침구류',
  },
  {
    id: 5,
    name: '가전/전자제품',
  },
  {
    id: 6,
    name: '청소/시설관리',
  },
  {
    id: 7,
    name: '소방/안전관리',
  },
  {
    id: 8,
    name: '사무용품',
  },
  {
    id: 9,
    name: '음료/식품',
  },
  {
    id: 10,
    name: '선물세트',
  },
];

export default function PurchaseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(RequestSchema),
  });

  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: '카테고리 선택' });

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };

  const formValues = {
    register,
    errors,
  };

  const formValues1 = {
    ...formValues,
    title: '구매 희망 품목',
    description: '구매하고자 하는 상품의 카테고리를 선택하시고 상품명을 입력하세요',
    categories,
    selectedCategory,
    setSelectedCategory,
  };

  const formValues2 = {
    ...formValues,
    title: '제품 성분명',
    description: '구매하고자 하는 제품의 성분 및 색상을 간단하게 설명해주세요( e.g., 액체형 샴푸, 흰색 슬리퍼)',
  };

  const formValues3 = {
    ...formValues,
    title: '3. 구매 수량',
    description: '구매하고자 하는 제품 예상 수량을 작성해주세요',
  };

  const formValues4 = {
    ...formValues,
    title: '견적 수령 희망일',
    description: '신청 문의 후, 견적을 받아보고 싶은 날짜를 작성해주세요',
  };

  const formValues5 = {
    ...formValues,
    title: '제품 배송 희망일',
    description: '판매사의 제품이 최종 낙찰된 후, 희망 납품(예상)일 혹은 기한을 작성해주세요',
  };

  const formValues6 = {
    ...formValues,
    title: '6. 제품 이미지',
    description:
      '요청사항이나 유사 컨셉의 제품 혹은 현재 사용 중인 제품의 이미지나 스케치를 첨부해주세요. (상세한 요청사항을 적어주시면 요청하신 부분과 일치하는 제품의 견적을 받을 확률이 높아집니다. 상세하게 작성 부탁드립니다)',
    placeholder: '요청사항을 적어주세요',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-40">
      <One formValues1={formValues1} />
      <Two formValues2={formValues2} />
      <Three formValues3={formValues3} />
      <Four formValues4={formValues4} />
      <Five formValues5={formValues5} />
      <Six formValues6={formValues6} />
      <input
        type="submit"
        value={'제출하기'}
        className="mt-[60px] disabled:cursor-not-allowed disabled:opacity-50 bg-primary h-[60px] rounded-lg w-full text-white font-normal text-button-md"
      />
    </form>
  );
}
