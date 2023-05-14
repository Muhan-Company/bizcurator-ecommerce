import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import One from './One';
import Two from './Two';
import { useState } from 'react';

export interface IFormInputs {
  itemName: string;
}

export interface Category {
  id: number;
  name: string;
}

const SignupSchema = yup
  .object({
    itemName: yup.string().required('상품명을 입력하세요'),
  })
  .required();

export default function PurchaseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SignupSchema),
  });

  const categories = [
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

  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: '카테고리 선택' });
  const notSelected = selectedCategory.id === 0;

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };

  const formValues = {
    title: '구매 희망 품목',
    description: '구매하고자 하는 상품의 카테고리를 선택하시고 상품명을 입력하세요',
    register,
    errors,
    categories,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-40">
      <One formValues={formValues} />
      <Two />
      <input
        type="submit"
        value={'제출하기'}
        disabled={notSelected}
        className="disabled:cursor-not-allowed disabled:opacity-70 bg-primary h-[60px] rounded-lg w-full text-white font-normal text-button-md"
      />
    </form>
  );
}
