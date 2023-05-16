import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import One from './Numbers/One';
import Two from './Numbers/Two';
import Three from './Numbers/Three';
import { useState } from 'react';
import { Category, IFormInputs } from './PurchaseForm';

const SignupSchema = yup
  .object({
    one: yup.string().required('제품명을 입력하세요'),
    two: yup.string().required('제품에 대해 설명해주세요'),
    three: yup.string().required('수량을 입력하세요'),
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
    register,
    errors,
  };

  const formValues1 = {
    ...formValues,
    title: '제품제작 의뢰',
    description: '제품을 만들고자 하는 목적을 고르고 제품 이름을 입력해주세요',
    categories,
    selectedCategory,
    setSelectedCategory,
  };

  const formValues2 = {
    ...formValues,
    title: '제작하고자 하는 제품 설명',
    description: '만들고자 하는 제품의 컨셉 또는 용도를 설명해주세요',
  };

  const formValues3 = {
    ...formValues,
    title: '제작 수량',
    description: '만들고자 하는 제품 예상 수량을 작성해주세요',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mb-40">
      <One formValues1={formValues1} />
      <Two formValues2={formValues2} />
      <Three formValues3={formValues3} />
      <input
        type="submit"
        value={'제출하기'}
        disabled={notSelected}
        className="mt-[60px] disabled:cursor-not-allowed disabled:opacity-70 bg-primary h-[60px] rounded-lg w-full text-white font-normal text-button-md"
      />
    </form>
  );
}
