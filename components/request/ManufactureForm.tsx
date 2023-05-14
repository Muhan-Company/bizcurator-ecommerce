import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import One from './One';
import Two from './Two';
import { useState } from 'react';
import { Category, IFormInputs } from './PurchaseForm';

const SignupSchema = yup
  .object({
    itemName: yup.string().required('상품명을 입력하세요'),
  })
  .required();

export default function ManufactureForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SignupSchema),
  });

  const categories = [
    { id: 1, name: '창업(제품판매)' },
    { id: 2, name: '작품 제작' },
    { id: 3, name: '개인적인 목적' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category>({ id: 0, name: '제작목적 선택' });
  const notSelected = selectedCategory.id === 0;

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };

  const formValues = {
    title: '제품제작 의뢰',
    description: '제품을 만들고자 하는 목적을 고르고 제품 이름을 입력해주세요',
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
